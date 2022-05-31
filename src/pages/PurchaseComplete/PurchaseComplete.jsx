import { useState } from "react";
import styled from "styled-components";

const TABLE_HEAD = [
  {
    id: 1,
    name: "품목이름",
  },
  {
    id: 2,
    name: "품목코드",
  },
  {
    id: 3,
    name: "구매단가 (VAT 포함)",
  },
  {
    id: 4,
    name: "상태",
  },
  {
    id: 5,
    name: "시리얼",
  },
];

const PurchaseComplete = () => {
  const [listItems, setListItems] = useState({});

  return (
    <>
      <Title>구매 완료</Title>
      <Form>
        <ReviewTable>
          <Tbody>
            <Tr>
              <Th>
                <CheckAll type="checkbox"></CheckAll>
              </Th>
              {TABLE_HEAD.map((head) => (
                <Th key={head.id}>{head.name}</Th>
              ))}
            </Tr>
          </Tbody>
        </ReviewTable>
      </Form>
    </>
  );
};

const Title = styled.h1`
  width: 95%;
  margin: 50px 0 0 3%;
  font-weight: bold;
  font-size: 18px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 13px;
`;

const ReviewTable = styled.table`
  width: 95%;
  min-width: 850px;
  border-collapse: collapse;
  margin-bottom: 50px;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const CheckAll = styled.input`
  margin-left: 12px;
`;

export const Th = styled.th`
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 15px;
  background-color: #fafafa;
  color: #2f2f2f;
  text-align: left;
`;

export default PurchaseComplete;
