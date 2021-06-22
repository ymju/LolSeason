import React from 'react';
import MainStyled from './IndexStyled';
import { Input, Button } from 'antd';

const adminClick = () => {
    alert("관리자 클릭")
}
const userClick = () => {
    alert("비회원 클릭")
}

const Index = () => {
    return (
        <MainStyled>
            <div className="login_opc" />
            <div className="login">
                <div className="logo">
                    <img src="./images/logo.png" />
                </div>
                <div className="login_wrap">
                    <div>
                        <label for="id">아이디</label>
                        <Input
                            id="id"
                        />

                    </div>
                    <div>
                        <label for="pass">패스워드</label>
                        <Input
                            id="pass"
                            type="password"
                        />
                    </div>
                </div>
                <div className="buttons">
                    <Button
                        type="text"
                        onClick={adminClick}
                    >
                        관리자
                    </Button>
                    <Button
                        type="text"
                        onClick={userClick}
                    >
                        비회원
                    </Button>
                </div>
            </div>
        </MainStyled>
    )
}

export default Index;