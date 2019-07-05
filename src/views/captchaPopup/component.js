import React from 'react';
import {CaptchaPopup} from './../../components/base';
const captchaPopupList = [
    {
        tem:<CaptchaPopup />,
        code:`<CaptchaPopup />`
    },
    {
        tem:<CaptchaPopup digits={4} />,
        code:`<CaptchaPopup digits={4} />`
    },
    {
        tem:<CaptchaPopup digits={4} />,
        code:`<CaptchaPopup type="number" />`
    },
    {
        tem: <CaptchaPopup focus />,
        code:` <CaptchaPopup focus />`
    },
];
export default captchaPopupList;