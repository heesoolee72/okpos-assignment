import styled from "styled-components";

const CheckList = ({ id, item, onCheckedItem, checkedList }) => {
  const { douzoneCode, name, unitPrice, isUsed } = item;
  const confirmIsUsed = isUsed ? "[중고] " : "[신품] ";

  return (
    <>
      <tr>
        <Td>
          <CheckBox
            onChange={(e) => {
              onCheckedItem(e.target.checked, item);
            }}
            checked={checkedList.includes(item) ? true : false}
            value={id}
            type="checkbox"
          ></CheckBox>
        </Td>
        <Td>
          <span
            style={{
              color: confirmIsUsed === "[신품] " ? "#00a900" : "#ff0000",
            }}
          >
            {confirmIsUsed}
          </span>
          {name}
        </Td>
        <Td>{douzoneCode}</Td>
        <Td>{unitPrice.toLocaleString("en")}원</Td>
        <Td>대기</Td>
        <Td>(시리얼넘버)</Td>
      </tr>
    </>
  );
};

const CheckBox = styled.input`
  margin-left: 12px;
  color: #ff3e3e;
  color: #00a900;
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #efefef;
  color: #656565;
`;

export default CheckList;
