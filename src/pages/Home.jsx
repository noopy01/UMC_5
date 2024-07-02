import React, { useState } from "react";
import Movie from "../components/Movie";
import getAPI from "../Api";
import './index.css';


export default function Home() {
    const [hide, setHide] = useState(true);
    const [items, setItems] = useState([]);  // 초기 상태를 빈 배열로 설정
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
    const [error, setError] = useState(null); // 에러 상태 관리

    const searchHandler = (e) => {  // 사용자가 검색 창에 입력을 시작하면 호출됨
        const query = e.target.value;
        if (query !== "") {
            setHide(false);  // 요소 표시
            setIsLoading(true);  // 로딩 시작
            setError(null);  // 이전 에러 초기화
            console.log(`Searching for: ${query}`);  // 검색어 로그
            getAPI("search", "ko-KR", "1", "search", query)
                .then(n => {
                    console.log('API Response:', n);  // 응답 로그
                    setItems(n || []);  // API 결과 설정, 빈 배열로 디폴트 값 설정
                    setIsLoading(false);  // 로딩 종료
                })
                .catch(error => {
                    console.error('API Error:', error);  // 에러 로그
                    setError(error.message);  // 에러 설정
                    setIsLoading(false);  // 로딩 종료
                });
        } else {
            setHide(true);
            setItems([]);  // 검색어가 없을 때 아이템을 빈 배열로 설정
        }
    }

    return (
        <div className="container">
            <div className="titleWrap">
                <p style={{ marginTop: '8%' }}>환영합니다</p>
            </div>
            <div className="contentWrap">
                <div className="inputTitle">🎦 Find your movies!</div>
                <div className="inputWrap">
                    <input className="input" onChange={searchHandler} />
                </div>
                <div className="searchBoxWrap">
                    <div className={hide ? "searchBoxH" : "searchBox"}>
                        {isLoading && <p>데이터를 받아오는 중 입니다...</p>}
                        {error && <p>에러가 발생했습니다: {error}</p>}
                        {!isLoading && !error && items.length > 0 && items.map((item) => (
                            <Movie
                                key={item.id}
                                title={item.title}
                                poster_path={item.poster_path}
                                vote_average={item.vote_average}
                                overview={item.overview}
                                release_date={item.release_date}
                            />
                        ))}
                        {!isLoading && !error && items.length === 0 && !hide && <p>검색 결과가 없습니다.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
