import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans:400,600,700');
    *{
        box-sizing:border-box;
    }
    body{
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-family: 'Open Sans','Nanum Gothic', sans-serif;
    }
    a{
        color:${props => props.theme.blueColor}
        text-decoration:none
    }
    input:focus{
        outline: none;
    }
`;
