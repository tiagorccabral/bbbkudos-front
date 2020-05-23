import React, {Component} from 'react';
import {
    SlackContainerHeader,
    SlackImageContainer,
    SlackSubTitleText,
    SlackTitlesContainer,
    SlackTitleText
} from "./styles";
import slackLogoIcon from "../../../media/slack-logo-icon.png";

class SlackComponent extends Component {
    render() {
        return (
            <SlackContainerHeader>
                <SlackImageContainer
                    src={slackLogoIcon} alt="student"
                />
                <SlackTitlesContainer>
                    <SlackTitleText>Reconheça seu colega pelo Slack</SlackTitleText>
                    <SlackSubTitleText>Mande um kudo pelo nosso canal #paredãodobem</SlackSubTitleText>
                </SlackTitlesContainer>
            </SlackContainerHeader>
        );
    }
}

export default SlackComponent;