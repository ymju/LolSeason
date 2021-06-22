import styled from 'styled-components';

const IndexStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    background-image: url('/images/background.jpg');
    background-size: cover;
    background-position: center;

    .login_opc {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #00000060;
    }

    .login {
        position: absolute;
        width: 300px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* background-color: #FFFFFF; */
        background-color: #FFFFFF90;
        border-radius: 15px;
        z-index: 2;

        .logo {
            box-sizing: border-box;
            padding: 45px 20px 35px 20px;
            position: relative;
            /* width: 300px;
            height: 100%;
            float: left; */
            text-align: center;

            img {
                /* position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%); */
                width: 120px;
            }
        }

        .login_wrap {
            box-sizing: border-box;
            padding: 15px 20px 35px 20px;

            > div {
                margin-bottom: 15px;
            }

            label {
                display: block;
                margin-bottom: 7px;
                font-weight: bold;
            }

            input {
                border: none;
                border-radius: 3px;
                width: 100%;
                height: 36px;
                box-sizing: border-box;
                padding: 0 12px;

                &:focus {
                    border: none;
                    outline: none;
                }
            }
        }

        .buttons {
            text-align: center;
            box-sizing: border-box;
            border-radius: 3px;
            padding-bottom: 45px;

            button {
                width: 120px;
                height: 36px;
                border: none;
                margin-right: 20px;

                &:hover {
                    background-color: #333333;
                    > span {
                        color: #FFFFFF;
                    }
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
`;

export default IndexStyled;