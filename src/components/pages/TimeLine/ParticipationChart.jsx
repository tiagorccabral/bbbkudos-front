import React, {Component} from 'react';
import {PieChart} from "react-chartkick";
import 'chart.js'
import {connect} from "react-redux";
import {getTimelineData} from "../../../actions/chartsAction";
import {isEmpty} from "../../../utils/validation";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import {KudosOption, KudosOptionImg} from "../KudosBoard/styles";
import {blue1, pink1, yellow1} from "../../../global/styles";
import studentImg from "../../../media/student.png";
import clappingHandsImg from "../../../media/clapping-hands.png";
import prayHandsImg from "../../../media/pray-hands.png";
import {KudosTDContainer} from "./styles";

class ParticipationChart extends Component {
    componentDidMount() {
        this.props.getTimelineData();
    }

    displayRightKudo(given_kudo) {
        let rightKudo = null;
        if (given_kudo.kudo_id === 1) {
            rightKudo = (
                <KudosOption
                    key={given_kudo.id}
                    color={blue1}
                >
                    <KudosOptionImg src={studentImg} alt="student" />
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

    renderTable = user_given_kudos => {
        return user_given_kudos.map(it => (
            <tr key={it.id}>
                <td>{it.name}</td>
                <td>
                    <KudosTDContainer>
                    {
                        it.given_kudos.map((given_kudo) => this.displayRightKudo((given_kudo)))
                    }
                    </KudosTDContainer>

                </td>
            </tr>
        ))
    };

    render() {

        let chartsToLoad = null;
        let tableToLoad = null;
        const {charts} = this.props;

        if (!isEmpty(charts.timeline_data)) {
            tableToLoad = this.renderTable(charts.timeline_data.user_given_kudos);

            const chartData = {
                "Kudos restantes": (charts.timeline_data.total_kudos - charts.timeline_data.distributed_kudos),
                "Kudos distribuidos": charts.timeline_data.distributed_kudos
            };
            chartsToLoad = (
                <PieChart
                    id="participation-chart"
                    data={chartData} label={{users_count: "Contagem de usuarios"}}
                />
            )
        } else {
            chartsToLoad = (
                <Spinner animation="border"/>
            )
        }

        return (
            <>
                <Row style={{marginBottom: 10}}>
                    <Col>
                        {chartsToLoad}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Table responsive striped bordered hover>
                            <thead>
                            <tr>
                                <th>Participante</th>
                                <th>Kudos Distribuídos</th>
                            </tr>
                            </thead>
                            <tbody>
                                {tableToLoad}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        );
    }
}

const mapStateToProps = state => ({
    charts: state.charts
});

export default connect(mapStateToProps, {getTimelineData})(ParticipationChart);