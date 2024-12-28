import React from "react";
import { Card, CardBody, CardTitle, Col } from "reactstrap";
import SimpleBar from "simplebar-react";

const DebtorsData = [
  { name: "John Doe", src: "path/to/profile1.jpg", amount: "$1500" },
  { name: "Jane Smith", src: "path/to/profile2.jpg", amount: "$2000" },
  { name: "Sam Wilson", src: "path/to/profile3.jpg", amount: "$1750" },
  { name: "Chris Johnson", src: "path/to/profile4.jpg", amount: "$1250" },
  { name: "Lisa Adams", src: "path/to/profile5.jpg", amount: "$950" },
];

const Debtors = () => {
  return (
    <React.Fragment>
      <Col lg={4} md={6} sm={12}>
        <Card>
          <CardBody>
            <CardTitle>Top 5 Debtors</CardTitle>
            <div className="pe-3">
              <SimpleBar style={{ maxHeight: "287px" }}>
                {DebtorsData.map((item, key) => (
                  <div key={key} className="d-flex py-3 align-items-center">
                    <div className="flex-shrink-0 me-3">
                      {item.src ? (
                        <img
                          className="rounded-circle avatar-xs"
                          alt={item.name}
                          src={item.src}
                        />
                      ) : (
                        <div className="avatar-xs">
                          <span className="avatar-title bg-secondary rounded-circle text-light">
                            {item.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="font-size-14 mb-1 text-truncate">{item.name}</h5>
                    </div>
                    <div className="flex-shrink-0 font-size-13 text-end">
                      {item.amount}
                    </div>
                  </div>
                ))}
              </SimpleBar>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Debtors;
