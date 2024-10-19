import React, { useState, useEffect } from "react";
import fetchData from "../api/fetch";
import style from "../styles/Home.module.css";
import { useStore } from "../context/store";
import Button from "../components/Button";
import { FaDownload, FaSignOutAlt, FaEye, FaEyeSlash } from "react-icons/fa";

const Home = () => {
  const { logout, token } = useStore(); 
  const [posts, setPosts] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    if (posts.length > 0) {
      setIsDataFetched(true);
    } else {
      setIsDataFetched(false);
    }
  }, [posts]);

  const getData = async () => {
    const url = "http://localhost:5000/api/posts";
    try {
      const result = await fetchData(url, token);

      if (result) {
        setPosts(result);
      } else {
        throw new Error("No data returned from the API");
      }
    } catch (error) {
      console.error("API Call Error:", error);
    }
  };

  const showDetailToggle = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <div className={style.topSide}>
        <div className={style.title}>
          <img className={style.icon} src={require("../assets/seynur_logo_dark.png")} alt="Logo" />
        </div>
        <div className={style.act}>
          {isDataFetched ? (
            <Button
              onClick={showDetailToggle}
              icon={!showDetail ? <FaEye /> : <FaEyeSlash />}
            >
              {!showDetail ? "Show Detail" : "Hide Detail"}
            </Button>
          ) : (
            ""
          )}
          <Button onClick={getData} icon={<FaDownload />}>
            Fetch Data
          </Button>
          <Button onClick={logout} icon={<FaSignOutAlt />}>
            Logout
          </Button>
        </div>
      </div>
      {isDataFetched && (
        <div className={style.table}>
          <div className={style.titles}>
            {showDetail ? <div className={style.title1}>User ID</div> : ""}

            {showDetail ? <div className={style.title2}>Post ID</div> : ""}

            <div className={style.title3}>Title</div>
            <div className={showDetail ? style.title4 : style.title5}>
              Content
            </div>
          </div>
          <div className={style.dataBox}>
            {posts.map((post, index) => (
              <div className={style.datas} key={index}>
                {showDetail ? (
                  <div className={style.data1}>{post.userId}</div>
                ) : (
                  ""
                )}

                {showDetail ? <div className={style.data2}>{post.id}</div> : ""}

                <div className={style.data3}>{post.title}</div>
                <div className={showDetail ? style.data4 : style.data5}>
                  {post.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
