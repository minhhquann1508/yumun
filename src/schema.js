import * as Yup from 'yup';
const nameRegex = /^\D*$/;
export const paymentSchema = Yup.object().shape({
    userName: Yup.string()
        .matches(nameRegex, 'Tên không hợp lệ')
        .required('Tên không được bỏ trống'),
    email: Yup.string()
        .email('Email không đúng định dạng')
        .required('Email không được bỏ trống'),
    address: Yup.string().required('Địa chỉ không được bỏ trống')
})