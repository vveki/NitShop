const PrimaryButton = styled.button`
  border: 2px solid white;
  color: ${(props) => props.color ? props.color : "white"};
  background-color: ${(props) => props.bgColor ? props.bgColor : "black"};
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) => props.borderRadius ? props.borderRadius : "5px"};
  display: flex;
  align-items: center;
`;

export default PrimaryButton;