import React, { useEffect, useState } from "react";

const fetchData = () => {

    // useState initalised with no mkData, mkData = the current state and setData = function to update the mkData - setData updates mkData
  const [epData, setEPData] = useState("");
  const [mkData, setMKData] = useState("");
  const [hsData, setHSData] = useState("");
  const [akData, setAKData] = useState("");

  const [usData, setUSData] = useState("");
  const [iaData, setIAData] = useState("");

  const [collapsed, setCollapsed] = React.useState(false);

  const fetchEPData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setEPData(json.lands);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchMKData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMKData(json.lands);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchHSData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setHSData(json.lands);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchAKData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setAKData(json.lands);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchUSData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setUSData(json.lands);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchIAData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setIAData(json.lands);
    } catch (error) {
      console.log("error", error);
    }
  };

  // useEffect runs on first page load and then every render from then on
  useEffect(() => {
    // Disney World Parks
    const epUrl = "/parks/5/queue_times.json";
    const mkUrl = "/parks/6/queue_times.json";
    const hsUrl = "/parks/7/queue_times.json";
    const akUrl = "/parks/8/queue_times.json";

    // Universal Orlando Parks
    const usUrl = "/parks/65/queue_times.json";
    const iaUrl = "/parks/64/queue_times.json";

    fetchEPData(epUrl);
    fetchMKData(mkUrl);
    fetchHSData(hsUrl);
    fetchAKData(akUrl);

    fetchUSData(usUrl);
    fetchIAData(iaUrl);

  }, []);

  return (<p>{mkData}</p>);
};
export default fetchData;