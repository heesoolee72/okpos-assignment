import { useEffect, useState } from "react";
import CheckList from "./CheckList";
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

const PurchaseCheck = () => {
  const [items, setItems] = useState([]);
  const [btnDisable, setBtnDisable] = useState(true);
  const [checkedList, setCheckedList] = useState([]);

  const onCheckedItem = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };

  const onCheckedAll = (checked, item) => {
    if (checked) {
      const checkedListArray = [];
      items.data.forEach((item) => checkedListArray.push(item));
      setCheckedList(checkedListArray);
    } else if (!checked) {
      setCheckedList([]);
    }
  };

  useEffect(() => {
    const handleButtonActivate = () => {
      if (checkedList.length > 0) {
        setBtnDisable(false);
      }
    };
    handleButtonActivate();
  }, [checkedList.length]);

  useEffect(() => {
    fetch("https://tpay-coding-test.s3.ap-northeast-2.amazonaws.com/data.json")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  console.log("checkedList:", checkedList);
  return (
    <>
      <Title>구매 대상 확인</Title>
      <Form>
        <ReviewTable>
          <Tbody>
            <Tr>
              <Th>
                <CheckAll
                  onChange={(e) => onCheckedAll(e.target.checked)}
                  checked={
                    checkedList.length === 0
                      ? false
                      : checkedList.length === items.data.length
                      ? true
                      : false
                  }
                  type="checkbox"
                  value="all"
                ></CheckAll>
              </Th>
              {TABLE_HEAD.map((head) => (
                <Th key={head.id}>{head.name}</Th>
              ))}
            </Tr>
            {items.data?.map((item) => (
              <CheckList
                key={item.id}
                id={item.id}
                item={item}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
                onCheckedItem={onCheckedItem}
              />
            ))}
          </Tbody>
        </ReviewTable>
        <ConfirmBtn disabled={btnDisable}>입고하기</ConfirmBtn>
      </Form>
    </>
  );
};

const Title = styled.h1`
  width: 95%;
  margin: 50px 0 0 3%;
  font-size: 18px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 13px;
`;

const ReviewTable = styled.table`
  margin-bottom: 20px;
  width: 95%;
  min-width: 850px;
  border-collapse: collapse;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const CheckAll = styled.input`
  margin-left: 12px;
`;

const Th = styled.th`
  padding: 15px;
  text-align: left;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  color: #2f2f2f;
  background-color: #fafafa;
`;

const ConfirmBtn = styled.button`
  position: relative;
  left: 43.5%;
  height: 30px;
  width: 80px;
  color: white;
  background-color: #279be3;

  &:disabled {
    background-color: lightgrey;
    color: grey;
    cursor: default;
  }
`;

export default PurchaseCheck;
