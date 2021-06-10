import React, { useState } from 'react';
import './CreatePost.scss';
import Select from 'react-select';
import { FastField, Form, useFormik, Formik } from 'formik';
import InputField from '../../../components/Form/InputField';
import axios from 'axios';
import { log } from 'node:console';

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

const optionNews = [
  { value: 5, label: 'Tin thường' },
  { value: 4, label: 'Tin VIP 3' },
  { value: 3, label: 'Tin VIP 2' },
  { value: 2, label: 'Tin VIP 1' },
  { value: 1, label: 'Tin VIP nổi bật' },
];

const optionTime = [
  { value: 3, label: 'Đăng theo ngày' },
  { value: 2, label: 'Đằng theo tuần' },
  { value: 1, label: 'Đăng theo tháng' },
];

const optionDays = [
  { value: 5, label: '5 ngày' },
  { value: 6, label: '6 ngày' },
  { value: 7, label: '7 ngày' },
];

const optionWeeks = [
  { value: 7, label: '1 tuần' },
  { value: 2 * 7, label: '2 tuần' },
  { value: 3 * 7, label: '3 tuần' },
];

const optionMonths = [
  { value: 30, label: '1 tháng' },
  { value: 2 * 30, label: '2 tháng' },
  { value: 3 * 30, label: '3 tháng' },
];

export default function CreatePostLeft() {
  const [listImages, setListImages] = useState([] as any);
  const [listOptionDate, setListOptionDate] = useState(optionDays);

  const [selectDay, setSelectDay] = useState<any>('');
  const [selectMonth, setSelectMonth] = useState<any>('');
  const [selectYear, setSelectYear] = useState<any>('');

  let dateTime = new Date('4/30/2021');
  let date1 = new Date('4/30/2021');

  const addImages = async (files: any) => {
    const form = new FormData();
    if (listImages.length + files.length > 12) {
      alert('Quá nhiều hình');
      return;
    }
    //form.append('file', files[0]);
    //form.append('upload_preset', 'wsckhwdr');
    let arrImages = [...listImages]; //as any;

    for (let i = 0; i < files.length; i++) {
      form.append('file', files[i]);
      form.append('upload_preset', 'wsckhwdr');
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dccqahm52/image/upload',
        form,
        {
          onUploadProgress: (ProgressEvent) => {
            if (i === files.length - 1)
              console.log(
                'Upload Progress:' +
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ) +
                  '%'
              );
          },
        }
      );
      console.log(res.data.public_id);

      arrImages.push({ src: res.data.secure_url, alt: res.data.public_id });
    }
    setListImages(arrImages);
    //console.log(arrImages);
  };

  const deleteImage = (id: any) => {
    setListImages(listImages.filter((image: any) => image.alt !== id));
  };

  const renderImages = (arrImages: any) => {
    return arrImages.map((photo: any) => (
      <div className="box__image">
        <div className="close__btn" onClick={() => deleteImage(photo.alt)}>
          x
        </div>
        <img src={photo.src} key={photo.alt} width="170" height="150" />
      </div>
    ));
  };

  const changeOptionDate = (e: any) => {
    if (e.value === 3) {
      setListOptionDate(optionDays);
      //setSelectDay(listOptionDate[0].value);
    } else if (e.value === 2) {
      setListOptionDate(optionWeeks);
    } else {
      setListOptionDate(optionMonths);
    }
  };

  const changeOptionTime = (e: any) => {
    let targetDate = new Date('6/11/2021');
    targetDate.setDate(targetDate.getDate() + 90);
    //setSelectDay(e.value);

    console.log(targetDate);
  };

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
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => addImages(e.target.files)}
                      />
                    </div>
                  </div>

                  <div className="container__images__show">
                    {renderImages(listImages)}
                  </div>
                  <h3 className="h3__header__left">Chọn hình thức đăng tin</h3>

                  <div className="option__post">
                    <div className="option__post__1">
                      <label>Chọn loại tin</label>
                      <Select
                        options={optionNews}
                        defaultValue={optionNews[0]}
                      />
                    </div>
                    <div className="option__post__1">
                      <label>Gói thời gian</label>
                      <Select
                        options={optionTime}
                        defaultValue={optionTime[0]}
                        onChange={(e) => changeOptionDate(e)}
                      />
                    </div>
                    <div className="option__post__1 option__post__2">
                      {listOptionDate === optionDays && <label>Số ngày</label>}
                      {listOptionDate === optionWeeks && <label>Số tuần</label>}
                      {listOptionDate === optionMonths && (
                        <label>Số tháng</label>
                      )}

                      <Select
                        options={listOptionDate}
                        //defaultValue={listOptionDate[0]}
                        //value={listOptionDate[0]}
                        onChange={(e) => changeOptionTime(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="dasd">{date1.toString()}</div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
