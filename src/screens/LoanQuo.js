import React from "react";
import InputField from "../components/fields/InputField";
import fid from "../assets/fiiiiid.png";
import { Button } from "@mantine/core";
import { HiHome } from "react-icons/hi";
import { Slider, RangeSlider, Checkbox } from "@mantine/core";
import ButtonComponent from "../components/button/ButtonComponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdCalculate, MdMessage } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { HiDocument, HiDocumentAdd } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { IoExit } from "react-icons/io5";
import HeaderComponent from "../components/header/HeaderComponent";
import Label from "../components/label/Label";
import ListOfValue from "../components/fields/ListOfValue";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  {
    field: "Date",
    headerName: "Date",
    type: "date",
    width: 90,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "BestBalance",
    headerName: "Best Balance",
    type: "number",
    width: 160,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "WorseBalance",
    headerName: "Worse Balance",
    type: "number",
    width: 160,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "AverageBalance",
    headerName: "Average Balance",
    type: "number",
    width: 160,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "DebitTurnover",
    headerName: "Debit Turnover",
    type: "number",
    width: 150,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "CreditTurnover",
    headerName: "Credit Turnover",
    type: "number",
    width: 160,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "COT",
    headerName: "COT",
    type: "number",
    width: 100,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "FeesAndComm",
    headerName: "Fees and Comm.",
    type: "number",
    width: 160,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "Interest",
    headerName: "Interest",
    type: "number",
    width: 100,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
];

const rows = [];

function LoanQuo() {
  const navigate = useNavigate();

  const navigateToLoan = () => {
    // 👇️ navigate to /contacts
    navigate("/Loan");
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/fid");
  };
  return (
    <div>
      <div className="nav">
        <div style={{ flex: "0.1" }}></div>
        <div style={{ flex: "0.8" }}>
          <div className="nav1">
            <div className="logo">
              <img src={fid} height="60px" width={"250px"} alt="" />
            </div>
          </div>
          <div className="nav2">
            <div>
              <Button
                variant="filled"
                color="orange"
                leftIcon={<HiHome size="1rem" />}
              >
                Home
              </Button>
            </div>
            <div>
              <Button
                variant="filled"
                color="orange"
                leftIcon={<GiReceiveMoney size="1rem" />}
              >
                Loan Application
              </Button>
            </div>
            <div>
              <Button
                variant="filled"
                color="orange"
                leftIcon={<MdMessage size="1rem" />}
              >
                Messages
              </Button>
            </div>
            <div>
              <Button
                variant="filled"
                color="orange"
                leftIcon={<HiDocument size="1rem" />}
              >
                Documents
              </Button>
            </div>
            <div>
              <Button
                variant="filled"
                color="orange"
                leftIcon={<HiDocumentAdd size="1rem" />}
              >
                Start New Application
              </Button>
            </div>
            <div>
              <Button
                variant="filled"
                color="orange"
                leftIcon={<AiFillEye size="1rem" />}
              >
                Review
              </Button>
            </div>
            <div>
              <Button
                variant="filled"
                color="orange"
                leftIcon={<IoExit size="1rem" />}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div style={{ flex: "0.1" }}></div>
      </div>
      <br></br>
      <div className="mid">
        <div style={{ flex: "0.1" }}></div>
        <div
          className=""
          style={{
            flex: "0.8",
            padding: "10px",
            border: "none",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            backgroundColor: "white",
          }}
        >
          <div>
            <HeaderComponent
              title={"Loan Application"}
              icon={<GiReceiveMoney />}
            />
          </div>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <div
              style={{
                padding: "10px",
                border: "none",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                backgroundColor: "white",
              }}
            >
              <InputField label={"Application Number"} disabled />
            </div>
          </div>
          <br></br>
          <div
            style={{
              padding: "10px",
              border: "none",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              backgroundColor: "white",
            }}
          >
            <div style={{ borderBottom: "1px solid" }}>
              <h5>Account Details</h5>
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <InputField label={"Customer Number"} required />
              </div>
              <div>
                <InputField
                  label={"Customer Type"}
                  inputWidth={"220px"}
                  disabled
                />
              </div>
              <div>
                <InputField label={"Currency"} inputWidth={"80px"} disabled />
              </div>
              <div>
                <InputField
                  label={"Account Number"}
                  inputWidth={"220px"}
                  disabled
                />
              </div>
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                flex: "0.5",
                padding: "20px",
                border: "none",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                backgroundColor: "white",
                borderRadius: "5px",
                border: "1px solid #cbd4d8",
              }}
            >
              <div style={{}}>
                <InputField label={"Effective Date"} labelWidth={"30%"} />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField
                  label={"Loan Product"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  required
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField label={"Currency"} labelWidth={"30%"} required />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField
                  label={"Facility Amount"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                  required
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField label={"Interest Rate"} labelWidth={"30%"} />
              </div>
            </div>
            <div
              style={{
                flex: "0.5",
                padding: "20px",
                border: "none",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                backgroundColor: "white",
                borderRadius: "5px",
                border: "1px solid #cbd4d8",
              }}
            >
              <div style={{}}>
                <InputField
                  label={"Interest Type"}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField
                  label={"Principal Repay Freq."}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField
                  label={"Interest Repay Freq."}
                  labelWidth={"30%"}
                  inputWidth={"60%"}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField
                  label={"Tenor (Months)"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                  required
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField
                  label={"Last Working Day"}
                  labelWidth={"30%"}
                  inputWidth={"30%"}
                />
              </div>
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div>
                <ButtonComponent
                  label={"Apply"}
                  buttonBackgroundColor={"orange"}
                  buttonColor={"white"}
                  buttonHeight={"40px"}
                  buttonWidth={"100px"}
                />
              </div>
              <div>
                <ButtonComponent
                  label={"Print"}
                  buttonBackgroundColor={"orange"}
                  buttonColor={"white"}
                  buttonHeight={"40px"}
                  buttonWidth={"100px"}
                />
              </div>
            </div>
          </div>
          <br></br>
          <div
            style={{
              padding: "10px",
              border: "none",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              backgroundColor: "white",
            }}
          >
            <div>
              <div>
                {/**Data Table */}
                <Box
                  sx={{
                    height: "180px",
                    width: "auto",
                    borderRadius: "5px",

                    // marginLeft: "20px",

                    "& .super-app-theme--header": {
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "",
                      fontSize: "16px",
                    },
                  }}
                >
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    components={{ Toolbar: GridToolbar }}
                  />
                </Box>
              </div>
            </div>
          </div>
          <br></br>
          <div style={{ display: "flex" }}>
            <div>
              <ButtonComponent
                label={"Back"}
                buttonBackgroundColor={"orange"}
                buttonColor={"white"}
                buttonHeight={"40px"}
                buttonWidth={"100px"}
                onClick={navigateHome}
              />
            </div>
            <div></div>
          </div>
        </div>
        <div style={{ flex: "0.1" }}></div>
      </div>
      <br></br>
    </div>
  );
}

export default LoanQuo;
