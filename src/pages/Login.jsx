import React from "react";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
`;

export default function Login() {
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({
        mode: "onChange"
    });

    const onSubmit = (data) => {
        console.log('Submitting data:', data); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="total1">
                <div className="login_page">
                    <div className="login_title">
                        로그인 페이지
                    </div>
                    <div className="login_content">
                        <input
                            type='text'
                            className="id"
                            placeholder="아이디를 입력해주세요."
                            {...register('username', {
                                required: "아이디는 필수입력사항입니다.",
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: "아이디를 입력해주세요"
                                }
                            })}
                        />
                        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}

                        <input
                            type='password'
                            className="id_pw"
                            placeholder="비밀번호"
                            {...register('password', {
                                required: "비밀번호는 필수 입력 항목입니다.",
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                    message: "영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요"
                                }
                            })}
                        />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    </div>
                    <div>
                        <button className="login_button" disabled={!isValid} type="submit">
                            로그인하기
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
