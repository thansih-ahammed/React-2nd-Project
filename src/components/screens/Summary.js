import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Summary() {
  return (
    <>
      <Helmet>
        <title>summary</title>
      </Helmet>

      <SummaryContainer>
        <SearchBar>
          <SearchBarContainer>
            <SearchBarContent>Search here</SearchBarContent>
            <SearchBarIcon>
              <SearchIcon src={require("../../assets/search.svg").default} />
            </SearchBarIcon>
          </SearchBarContainer>
        </SearchBar>
        <StatisticsContainer>
          <StatisticsTopContainer>
            <StatisticsHeading>Statistics</StatisticsHeading>
            <Calender>
              <CalenderContent>6 Months</CalenderContent>
              <CalenderIcon>
                <CalenderIconImg
                  src={require("../../assets/Settings-1.svg").default}
                />
              </CalenderIcon>
            </Calender>
          </StatisticsTopContainer>
        </StatisticsContainer>
        <StatisticsMainContainer>
          <DeliveryContainer>
            <DeliveryFirstContainer>
              <DeliveryIcon>
                <DeliveryIconImg
                  src={require("../../assets/Group 49.svg").default}
                />
              </DeliveryIcon>
              <DeliveryContent>
                <MainContent> Awaiting Delivery</MainContent>

                <SubContent>150k Orders</SubContent>
              </DeliveryContent>
            </DeliveryFirstContainer>
            <DeliverySecondContainer>
              <DeliveryIcon>
                <DeliveryIconImg
                  src={require("../../assets/Group 49.svg").default}
                />
              </DeliveryIcon>
              <DeliveryContent>
                <MainContent> Awaiting Delivery</MainContent>

                <SubContent>150k Orders</SubContent>
              </DeliveryContent>
            </DeliverySecondContainer>
          </DeliveryContainer>
          <SalesContainer>
            <SalesImageContainer>
              <SalesImage src={require("../../assets/Group 26.svg").default} />
            </SalesImageContainer>
          </SalesContainer>
        </StatisticsMainContainer>
        <StatisticsBottomContainer>
          <BottomLeftContainer>
            <LeftContainerContent>
              Create Ads for Your Business
            </LeftContainerContent>
            <LeftImageContainer>
              <LeftContainerImageImg
                src={require("../../assets/Group 52.svg").default}
              />
            </LeftImageContainer>
          </BottomLeftContainer>
          <BottomRightContainer>
            <RightContainerContent>Secure Your Payments</RightContainerContent>
            <RightImageContainer>
              <RightContainerImageImg
                src={
                  require("../../assets/businessman-svgrepo-com (2) 2.svg")
                    .default
                }
              />
            </RightImageContainer>
          </BottomRightContainer>
        </StatisticsBottomContainer>
      </SummaryContainer>
    </>
  );
}

const SummaryContainer = styled.div`
  padding: 40px 0;
  
  width: 49%;
  @media (max-width: 1200px) {
    width: 69%;
    padding-top: 140px;

       }
`;
const SearchBar = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #f1f1f3;
  border-radius: 15px;
  padding: 20px 10px;
`;
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
const SearchBarContent = styled.h3`
  color: #5a5a5a;
  font-family: "Poppins-Regular";
`;
const SearchBarIcon = styled(Link)`
  display: block; ;
`;
const SearchIcon = styled.img`
  display: block;
  width: 100%;
`;
const StatisticsContainer = styled.div`
  padding: 55px 0 0 0px;
  width: 80%;
  margin: 0 auto;
`;
const StatisticsTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StatisticsHeading = styled.h1`
  font-size: 28px;
  font-family: "Poppins-Regular";
`;
const Calender = styled.div`
  display: flex;
  align-items: center;
`;
const CalenderContent = styled.small`
  display: block;
  font-family: "Poppins-Regular";
  color: #000;
  font-size: 14px;
`;
const CalenderIcon = styled.span`
  display: block;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`;
const CalenderIconImg = styled.img`
  display: block;
  width: 100%;
`;
const StatisticsMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;
const DeliveryContainer = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DeliveryFirstContainer = styled.div`
  height: 47%;
  background-color: #f4e7e4;
  border-radius: 20px;
  padding: 25px;

  &:hover {
    box-shadow: 0px 0px 10px 1px grey;
    cursor: pointer;
  }
`;
const DeliveryIcon = styled.span`
  display: block;
  width: 55px;
`;
const DeliveryIconImg = styled.img`
  display: block;
  width: 100%;
`;
const DeliveryContent = styled.div`
  font-family: "Poppins-Regular";
`;
const MainContent = styled.h4`
  font-size: 20px;
`;
const SubContent = styled.h2`
  font-size: 26px;
`;
const DeliverySecondContainer = styled.div`
  padding: 25px;
  height: 47%;
  border-radius: 20px;
  background-color: #e6f4ff;
  &:hover{
    box-shadow: 0px 0px 10px 1px grey;
  cursor: pointer;
`;
const SalesContainer = styled.div`
  width: 47%;
`;
const SalesImageContainer = styled.div``;
const SalesImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 20px;
  &:hover{
    box-shadow: 0px 0px 10px 1px grey;
  cursor: pointer;
`;
const StatisticsBottomContainer = styled.div`
  padding: 40px 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const BottomLeftContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const LeftContainerContent = styled.h3`
  max-width: 200px;
  line-height: 30px;
  font-size: 20px;
  font-family: "Poppins-Regular";
`;
const LeftImageContainer = styled.div`
  width: 100px;
  margin: 40px 0 0 40px;
`;
const LeftContainerImageImg = styled.img`
  display: block;
  width: 100%;
`;
const BottomRightContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const RightContainerContent = styled.h1`
  max-width: 200px;
  font-size: 20px;
  font-family: "Poppins-Regular";
`;
const RightImageContainer = styled.div`
  width: 120px;
`;
const RightContainerImageImg = styled.img`
  display: block;
  width: 100%;
`;
