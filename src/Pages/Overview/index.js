import React from "react";
import UsePanel from "./UserPanel";
import OrderStatus from "./OrderStatus";
import Notifications from "./Notifications";
import SocialSource from "./SocialSource";
import OverView from "./OverView";
import RevenueByLocation from "./RevenueByLocation";
import LatestTransation from "./LatestTransation";
import Debtors from "./Debtors";
import PropertySummary from "./PropertySummary";

import { Row, Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Overview = () => {
    document.title = "Dashboard | Upzet - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Upzet" breadcrumbItem="Overview" />

                    <Row>
                        {/* Latest Transaction Table */}
                        <LatestTransation />
                        {/* Overview Chart */}
                        <OverView />
                        <Notifications />
                    </Row>

                    <Row>
                        {/* Order Stats */}
                        <Debtors />
                        {/* Notifications */}
                        <Debtors />
                        {/* Revenue by Location Vector Map */}
                        <PropertySummary />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Overview;
