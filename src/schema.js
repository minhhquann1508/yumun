import * as Yup from 'yup';
const nameRegex = /^\D*$/;
const phoneRegex = /^0\d{9}$/;
export const paymentSchema = Yup.object().shape({
    userName: Yup.string()
        .matches(nameRegex, 'Tên không hợp lệ')
        .required('Tên không được bỏ trống'),
    email: Yup.string()
        .email('Email không đúng định dạng')
        .required('Email không được bỏ trống'),
    address: Yup.string().required('Địa chỉ không được bỏ trống'),
    phone: Yup.string()
        .matches(phoneRegex, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại không được bỏ trống'),
})