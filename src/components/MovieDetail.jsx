import React from 'react';
import { useLocation, useParams } from "react-router-dom";
import {IMG_BASE_URL} from '../components/Movie';
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

export default function MovieDetail(){
    const{ id } = useParams();  // url로 넘긴 영화 이름 useParams로 받기
    const{ state } = useLocation(); // 페이지 이동 시 넘긴 props를 useLocation로 받기
    const score = [];
    
    for (let i = 0; i < Math.floor(state.vote_average); i++){
        score.push(true);
    }
    for (let i = 0; i <10-Math.floor(state.vote_average) ; i++){
        score.push(false);
    }
    return(
        <div className="detail-container">
            <div style={{display: 'flex', margin: '5%'}}>
                <img 
                style={{width:"300px", height: "450px"}}
                src ={IMG_BASE_URL + state.poster_path} 
                alt='영화 포스터 이미지'
                />
            </div>
            <div className="title_box ">
              <p className="title_text">{id}</p>  
                 <br /> 
                 <p style={{fontSize:"22px"}}> 평점             
                    <span> {Math.floor(state.vote_average)}{ score.map((value, index) => ( value ? <FaStar /> : <FaRegStar />)) }</span>
                 
                 </p>
                <br />
               <p style={{fontSize:"22px"}}> 개봉일 <span> {state.release_date} </span></p> <br />
               <p style={{fontSize:"22px"}}> 줄거리 < br />< br /><span>{state.overview.length < 2 ? "상세 줄거리 정보가 없습니다" : state.overview} </span> </p>
               
                
            </div>
            
        </div>
    )
} 