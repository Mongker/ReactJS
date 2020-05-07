import { THANH_CONG, THAT_BAI, LAY_DANH_SACH } from './actionTypes.js';

// action
export const actionThanhCong = () => {
    return {
        type: THANH_CONG,
    };
};

export const actionThatBai = () => {
    return {
        type: THAT_BAI
    }
}

export const actionLayDanhSach = (dataObj) =>{
    return {
        type: LAY_DANH_SACH,
        dataObj
    }
}