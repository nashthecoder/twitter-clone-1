import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LayOut from "./LayOut";
import BackHeadWithUsername from "../middleComponents/BackHeadWithUsername";
import NavigationList from "../middleComponents/NavigationList";
import MakeSettingPanel from "./MakeSettingPanel";
import Text from "../BaseComponents/Text";
import { linkListType } from "../propTypes";

const ContentWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
`;
const Content = styled.div`
  margin: 37px 18px;
  text-align: center;
`;
const SubTitleWrapper = styled.div`
  margin-top: 9px;
`;
const StyledLink = styled(Link)`
  color: rgb(27, 149, 224);
`;
function RightAside({
  headTitle,
  navLinks,
  contentTitle,
  contentSubTitle,
  href
}) {
  return (
    <>
      <MakeSettingPanel data={{ title: headTitle }} />
      <NavigationList links={navLinks} />
      <ContentWrapper>
        <Content>
          <Text bold large>
            {contentTitle}
          </Text>
          <br />
          <SubTitleWrapper>
            <Text secondary>{contentSubTitle}</Text>
            <StyledLink to={href}>了解更多</StyledLink>
          </SubTitleWrapper>
        </Content>
      </ContentWrapper>
    </>
  );
}
RightAside.propTypes = {
  headTitle: string.isRequired,
  contentTitle: string.isRequired,
  contentSubTitle: string.isRequired,
  href: string.isRequired,
  navLinks: linkListType.isRequired
};

function MakeNavLayout(title, links) {
  function LayoutComponent({ contentTitle, contentSubTitle, href }) {
    return (
      <LayOut
        narrowHead={<BackHeadWithUsername title={title} />}
        rightAside={(
<RightAside
  headTitle={title}
  navLinks={links}
  contentTitle={contentTitle}
  contentSubTitle={contentSubTitle}
  href={href}
/>
)}
      />
    );
  }
  LayoutComponent.propTypes = {
    contentTitle: string.isRequired,
    contentSubTitle: string,
    href: string.isRequired
  };
  LayoutComponent.defaultProps = {
    contentSubTitle: null
  };
  return LayoutComponent;
}
export default MakeNavLayout;
