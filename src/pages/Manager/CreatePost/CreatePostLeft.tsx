import React from 'react';
import './CreatePost.scss';
import Select from 'react-select';
import { FastField, Form, useFormik, Formik } from 'formik';
import InputField from '../../../components/Form/InputField';

interface ICreatePost {
  name: string;
  phone: string;
  password: string;
}

const initialValues: ICreatePost = {
  name: '',
  phone: '',
  password: '',
};

export default function CreatePostLeft() {
  const creatPostHandle = () => {};

  return (
    <div className="post__col__left">
      <h3 className="h3__header__left">Địa chỉ cho thuê</h3>
      <div className="content__section__post__left">
        {/* <Formik></Formik> */}
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            creatPostHandle();
          }}
        >
          {() => {
            return (
              <Form>
                <div className="address__rental">
                  <div className="address__rental__1">
                    <label className="asd">Tỉnh/Thành phố</label>
                    <Select />
                  </div>
                  <div className="address__rental__1">
                    <label>Quận/Huyện</label>
                    <Select />
                  </div>
                  <div className="address__rental__1">
                    <label>Phường/Xã</label>
                    <Select />
                  </div>
                  <div className="address__rental__1">
                    <label>Đường/Số nhà</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="address__real">
                  <label>Địa chỉ chính xác</label>
                  <input type="text" readOnly />
                </div>
                <h3 className="h3__header__left">Thông tin mô tả</h3>
                <div className="kind__of__room">
                  <label>Loại chuyên mục</label>
                  <Select />
                </div>
                <div className="title__of__room">
                  <label>Tiêu đề</label>
                  <input type="text" />
                </div>
                <div className="description__content">
                  <label>Nội dung mô tả</label>
                  <textarea className="description__content__textarea"></textarea>
                </div>
                <div className="information__call">
                  <label>Thông tin liên hệ</label>
                  <input type="text" readOnly />
                </div>

                <div className="price__of__room">
                  <label>Giá cho thuê</label>
                  <input type="text" placeholder="triệu đồng" />
                </div>

                <div className="area__of__room">
                  <label>Diện tích</label>
                  <input type="text" placeholder="m²" />
                </div>

                <h3 className="h3__header__left">Hình ảnh</h3>
                <div className="image__of__room">
                  <label>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</label>
                  <div className="form-group">
                    <div className="browse__photos">
                      <i className="icon__upload__images"></i>
                      <span className="">Thêm ảnh</span>
                      <input type="file" accept="image/*"></input>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
