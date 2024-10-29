import Title, { TitleSize } from "../title/title";
import { Feature, Image, Owner, Header, Text } from "./styles";
import PropTypes from 'prop-types';

// Карточка
function FeatureCard({
  title, // название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательной
  image // иконка
}) {
  return (
    <Feature $isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner $isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
}

// Добавляем propTypes для валидации пропсов
FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    isNegative: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
};


export default FeatureCard;
