import PropTypes from "prop-types";
import { useState } from "react";
import { TabButton, Header, Content, TabListItem } from "./styles";

function Tabs({ tabsList = [], maxContentHeiht }) {
    const [selectIndex, setSelectIndex] = useState(0);

    return (
        <div>
            <Header>
                {tabsList.map((tab, index) => (
                    <TabListItem key={`tab${index * 10}`}>
                        <TabButton
                            $isSelect={selectIndex === index}
                            {...(selectIndex === index
                                ? { as: "span" }
                                : {
                                        onClick: () => {
                                            setSelectIndex(index);
                                        },
                                })}
                        >
                            {tab.title}
                        </TabButton>
                    </TabListItem>
                ))}
            </Header>
            <Content $maxContentHeiht={maxContentHeiht}>
                {tabsList[selectIndex].content}
            </Content>
        </div>
    );
}

Tabs.propTypes = {
    tabsList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node,
            ]).isRequired,
        })
    ).isRequired,
    maxContentHeiht: PropTypes.string,
};

export default Tabs;
