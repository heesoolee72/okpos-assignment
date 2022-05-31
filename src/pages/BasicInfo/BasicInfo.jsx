import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled, { css } from "styled-components";

const BRANCH_OFFICE = [
  {
    id: 1,
    branch: "서울",
  },
  {
    id: 2,
    branch: "인천",
  },
  {
    id: 3,
    branch: "수원",
  },
  {
    id: 4,
    branch: "광주",
  },
  {
    id: 5,
    branch: "강릉",
  },
];

const WAREHOUSE = [
  {
    id: 1,
    type: "일반",
  },
  {
    id: 2,
    type: "대체장비 - 무선/라우터",
  },
  {
    id: 3,
    type: "tPay",
  },
  {
    id: 4,
    type: "Jtnet",
  },
  {
    id: 5,
    type: "나이스정보통신",
  },
];

const BasicInfo = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [inputValues, setInputValues] = useState({
    branchOffice: "",
    warehouse: "",
    memo: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };

  const handleDateInput = (date) => {
    setStartDate(date);
    console.log(startDate);
  };

  return (
    <>
      <Title>기본 정보</Title>
      <Form>
        <InfoTable>
          <tbody>
            <Tr>
              <Td>
                <Essential>* </Essential>구매요청자
              </Td>
              <InputTd>
                <Input disabled placeholder="김성현 @ 티보드 개발팀"></Input>
              </InputTd>
              <Td>
                <Essential>* </Essential>지사
              </Td>
              <InputTd>
                <Select name="branchOffice" onChange={handleInput}>
                  {BRANCH_OFFICE.map((item) => (
                    <option key={item.id} value={item.branch}>
                      {item.branch}
                    </option>
                  ))}
                </Select>
              </InputTd>
            </Tr>
            <Tr>
              <Td>
                <Essential>* </Essential>창고
              </Td>
              <InputTd>
                <Select name="warehouse" onChange={handleInput}>
                  {WAREHOUSE.map((item) => (
                    <option key={item.id} value={item.type}>
                      {item.type}
                    </option>
                  ))}
                </Select>
              </InputTd>
              <Td>
                <Essential>* </Essential>구매희망일
              </Td>
              <InputTd calendar>
                <SDatePicker
                  name="date"
                  selected={startDate}
                  onChange={(date) => handleDateInput(date)}
                ></SDatePicker>
                <Icon alt="calendar" src="/img/calendar.jpg"></Icon>
              </InputTd>
            </Tr>
            <Tr>
              <Td memo>메모</Td>
              <InputTd memo colSpan="3">
                <MemoText
                  name="memo"
                  onChange={handleInput}
                  memo
                  placeholder="메모..."
                ></MemoText>
              </InputTd>
            </Tr>
          </tbody>
        </InfoTable>
      </Form>
    </>
  );
};

const InputStyle = css`
  border: 1px solid #b7b7b7;
  border-radius: 2px;
  color: #656565;
`;

const Title = styled.h1`
  margin: 50px 0 0 3%;
  width: 95%;
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

const InfoTable = styled.table`
  width: 95%;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  border: 1px solid #efefef;
`;

const Td = styled.td`
  border: 1px solid #efefef;
  padding: 15px;
  padding-top: ${(props) => (props.memo ? "15px" : null)};
  background-color: #fafafa;
  color: #2f2f2f;
  height: ${(props) => (props.memo ? "150px" : null)};
`;

const InputTd = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${(props) => (props.calendar ? "3.5%" : null)};
  width: ${(props) => (props.memo ? "238%" : null)};
  padding: ${(props) => (props.memo ? "0" : null)};
`;

const Essential = styled.span`
  color: #ee5b0b;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 6.5px;
  width: 93%;
  ${InputStyle}
`;

const Input = styled.input`
  height: 30px;
  padding-left: 10px;
  width: 93%;
  ${InputStyle}

  &:disabled {
    background: #f2f2f2;
  }
`;

const MemoText = styled.textarea`
  padding-top: 10px;
  padding-left: 10px;
  margin: 10px 0px 10px 15px;
  width: 100%;
  height: 140px;
  text-align: left;
  resize: vertical;
  ${InputStyle}
`;

const SDatePicker = styled(DatePicker)`
  position: relative;
  width: 96.5%;
  height: 30px;
  padding-left: 8px;
  border: 1px solid #b7b7b7;
  ${InputStyle}
`;

const Icon = styled.img`
  position: absolute;
  left: 94.8%;
  width: 15px;
  pointer-events: none;
`;

export default BasicInfo;
