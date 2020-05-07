import { LAY_DANH_SACH, THANH_CONG, THAT_BAI} from "../actions/actionTypes";

const danhSachReducers = (dataObj = {}, actions) => {
    switch (actions.type){
        case LAY_DANH_SACH:
            return actions.dataObj;
        default:
            return dataObj
    }
}

export default danhSachReducers;