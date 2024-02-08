const formatText = (text) => {
  // Remove underscores and capitalize the first letter of each word
  return text.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};
const renderInfo = ({ propertyName, ticketData }) => (
  <p>{`${formatText(propertyName)}: ${ticketData[0][propertyName.toLowerCase()]}`}</p>
);

export default renderInfo;
