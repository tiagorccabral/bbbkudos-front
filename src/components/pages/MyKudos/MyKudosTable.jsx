import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import moment from "moment";
import {PageSubTitle} from "../styles";
import {getMyKudos} from "../../../actions/kudoActions";
import {connect} from "react-redux";
import {isEmpty} from "../../../utils/validation";
import Spinner from "react-bootstrap/Spinner";
import {KudosOption, KudosOptionImg} from "../KudosBoard/styles";
import {blue1, pink1, yellow1} from "../../../global/styles";
import studentImg from "../../../media/student.png";
import clappingHandsImg from "../../../media/clapping-hands.png";
import prayHandsImg from "../../../media/pray-hands.png";
import {KudosTDContainer} from "../TimeLine/styles";

class MyKudosTable extends Component {
    componentDidMount() {
        this.props.getMyKudos({user_id: this.props.auth.user.id});
    }

    displayRightKudo(given_kudo) {
        let rightKudo = null;
        if (given_kudo.kudo_id === 1) {
            rightKudo = (
                <KudosOption
                    key={given_kudo.id}
                    color={blue1}
                >
                    <KudosOptionImg src={studentImg} alt="student"/>
                </KudosOption>
            )
        } else if (given_kudo.kudo_id === 2) {
            rightKudo = (
                <KudosOption
                    key={given_kudo.id}
                    color={yellow1}
                >
                    <KudosOptionImg
                        src={clappingHandsImg}
                        alt="clapping-hands"
                    />
                </KudosOption>
            )
        } else if (given_kudo.kudo_id === 3) {
            rightKudo = (
                <KudosOption
                    key={given_kudo.id}
                    color={pink1}
                >
                    <KudosOptionImg
                        src={prayHandsImg}
                        alt="pray-hands"
                    />
                </KudosOption>
            )
        }
        return rightKudo
    }

    renderReceivedKudos = (receivedKudos) => {
        return receivedKudos.map(it => (
            <tr key={it.id}>
                <td>{it.name}</td>
                <td>
                    <KudosTDContainer>
                        {
                            this.displayRightKudo(it)
                        }
                    </KudosTDContainer>
                </td>
                <td>
                    {moment(it.created_at).locale("pt-br").format("MMMM Do YYYY, h:mm a")}
                </td>
            </tr>
        ))
    };

    renderSentKudos = (sentKudos) => {
        return sentKudos.map(it => (
            <tr key={it.id}>
                <td>{it.name}</td>
                <td>
                    <KudosTDContainer>
                        {
                            this.displayRightKudo(it)
                        }
                    </KudosTDContainer>
                </td>
                <td>
                    {moment(it.created_at).locale("pt-br").format("MMMM Do YYYY, h:mm a")}
                </td>
            </tr>
        ))
    };

    render() {

        let receivedKudosTable, sentKudosTable = null;
        const {kudos} = this.props;

        if (!isEmpty(kudos.my_kudos)) {
            sentKudosTable = (
                <Table responsive striped bordered hover>
                    <thead>
                    <tr>
                        <th>Para quem enviou</th>
                        <th>Kudo enviado</th>
                        <th>Quando?</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderSentKudos(kudos.my_kudos.sent_kudos)}
                    </tbody>
                </Table>
            );
            receivedKudosTable = (
                <Table responsive striped bordered hover>
                    <thead>
                    <tr>
                        <th>Quem enviou</th>
                        <th>Kudo recebido</th>
                        <th>Quando?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderReceivedKudos(kudos.my_kudos.received_kudos)}
                    </tbody>
                </Table>
            )

        } else {
            receivedKudosTable = (
                <Spinner animation="border"/>
            )
        }

        return (
            <>
                <PageSubTitle>Kudos Recebidos</PageSubTitle>
                {receivedKudosTable}
                <PageSubTitle>Kudos Enviados</PageSubTitle>
                {sentKudosTable}
            </>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    kudos: state.kudos
});

export default connect(mapStateToProps, {getMyKudos})(MyKudosTable);