import React, {Component} from 'react';
import {PieChart} from "react-chartkick";
import 'chart.js'
import {connect} from "react-redux";
import {getTimelineData} from "../../../actions/chartsAction";
import {isEmpty} from "../../../utils/validation";
import Spinner from "react-bootstrap/Spinner";

class ParticipationChart extends Component {
    componentDidMount() {
        this.props.getTimelineData();
    }

    render() {

        let chartsToLoad = null;
        const {charts} = this.props;

        if (!isEmpty(charts.timeline_data)) {
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
                <Spinner animation="border" />
            )
        }

        return (
            <div>
                {chartsToLoad}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    charts: state.charts
});

export default connect(mapStateToProps, {getTimelineData})(ParticipationChart);