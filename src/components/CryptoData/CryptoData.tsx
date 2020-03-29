import React from "react";
import CryptoTimeSeries from "./CryptoTimeSeries";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function CryptoData() {
  return (
    <Tabs className="column crypto-data">
      <TabList className="tab tab-block">
        <Tab className="tab-item active">Overview</Tab>
        <Tab className="tab-item active">Analysis</Tab>
        <Tab className="tab-item active">Charts</Tab>
        <Tab className="tab-item active">Trade</Tab>
        <Tab className="tab-item active">Timeline</Tab>
      </TabList>

      <TabPanel>
        <CryptoTimeSeries />
      </TabPanel>
      <TabPanel>
        <h2>Analysis</h2>
      </TabPanel>
      <TabPanel>
        <h2>Charts</h2>
      </TabPanel>
      <TabPanel>
        <h2>Trade</h2>
      </TabPanel>
      <TabPanel>
        <h2>Timeline</h2>
      </TabPanel>
    </Tabs>
  );
}
