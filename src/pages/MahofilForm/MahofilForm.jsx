import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Heading from "../../components/Heading";
import Quote from "../../components/Quote";
import inputImg from "./../../../public/formImg.png";

const MahofilForm = () => {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazelas, setUpazela] = useState([]);
  const [unions, setUnions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [selectedUpazela, setSelectedUpazela] = useState([]);
  const [selectedUnion, setSelectedUnion] = useState([]);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [filteredUpazelas, setFilteredUpazelas] = useState([]);
  const [filteredUnions, setFilteredUnions] = useState([]);

  useEffect(() => {
    fetch("/Bangladesh/division.json")
      .then((res) => res.json())
      .then((data) => setDivisions(data));
  }, []);

  useEffect(() => {
    fetch("/Bangladesh/district.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data));
  }, []);

  useEffect(() => {
    fetch("/Bangladesh/upazela.json")
      .then((res) => res.json())
      .then((data) => setUpazela(data));
  }, []);

  useEffect(() => {
    fetch("/Bangladesh/union.json")
      .then((res) => res.json())
      .then((data) => setUnions(data));
  }, []);

  const divisionSelect = (event) => {
    setSelectedDivision(event.target.value);
    const districtOfDivision = districts.filter(
      (district) => district.division_name == event.target.value
    );
    setFilteredDistricts(districtOfDivision);
  };

  const districtSelect = (event) => {
    setSelectedUpazela(event.target.value);
    const upazelaOfDistrict = upazelas.filter(
      (upazela) => upazela.district_name == event.target.value
    );
    setFilteredUpazelas(upazelaOfDistrict);
  };

  const upazelaSelect = (event) => {
    setSelectedDistrict(event.target.value);
    const unionOfUpazela = unions.filter(
      (union) => union.upazilla_name == event.target.value
    );
    setFilteredUnions(unionOfUpazela);
  };

  const unionSelect = (event) => {
    setSelectedUnion(event.target.value);
  };

  console.log(selectedDistrict);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const applicantName = form.applicantName.value;
    const mobileNo = form.mobileNo.value;
    const date = form.date.value;
    const applicationData = {
      applicantName,
      mobileNo,
      date,
      selectedDivision,
      selectedDistrict,
      selectedUpazela,
      selectedUnion,
    };
    console.log(applicationData);
  };

  return (
    <section className="md:p-8 p-4 bg-green-200">
      <Helmet>
        <title>Application Form</title>
      </Helmet>
      <Heading heading={"প্রোগ্রামের জন্য আবেদন করুন"}></Heading>
      <Quote
        quote={
          "যে ব্যক্তি মানুষকে আল্লাহর পথে দাওয়াত দেয়, সৎকর্ম করে আর বলে, ‘আমি তো মুসলমানদের একজন’, তার চেয়ে উত্তম আর কে হতে পারে? (সূরা হা-মিম-সাজদা: ৩৩)"
        }
      ></Quote>
      <p className="text-red-500 mb-4">
        ফর্মের নিচে আমাদের নীতিমালা ও শর্তাবলী দেওয়া আছে। আবেদনের পূর্বে
        নীতিমালা ও শর্তাবলী পড়ে নিবেন ইনশাআল্লাহ।
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col p-4 gap-4"
      >
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            আবেদনকারীর নাম
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name="applicantName"
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            আবেদনকারীর মোবাইল নম্বর (ইংরেজিতে)
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="number"
            name="mobileNo"
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            মাহফিলের প্রস্তাবিত তারিখ
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="date"
            name="date"
            id=""
            className="w-full pl-16 pr-4 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full gap-2 flex flex-col md:flex-row md:gap-10 items-center">
          <div className="w-full h-full flex items-center relative">
            <p className="absolute -top-2 left-20 text-green-700">
              মাহফিল কোন বিভাগে করতে চান?
            </p>
            <img src={inputImg} className="h-20 z-10" />
            <select
              value={selectedDivision}
              onChange={divisionSelect}
              className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
            >
              <option value="">বিভাগ নির্বাচন করুন</option>
              {divisions.map((division) => (
                <option key={division.id} value={division.bn_name}>
                  {division.bn_name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full h-full flex items-center relative">
            <p className="absolute -top-5 left-20 text-green-700">
              মাহফিল কোন জেলায় করতে চান?
            </p>
            <img src={inputImg} alt="" className="h-20 z-10" />
            <select
              onChange={districtSelect}
              className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
            >
              <option value="">জেলা নির্বাচন করুন</option>
              {filteredDistricts.map((district) => (
                <option key={district?.id} value={district?.bn_name}>
                  {district?.bn_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:w-[600px] w-full gap-2 flex flex-col md:flex-row md:gap-10 items-center">
          <div className="w-full h-full flex items-center relative">
            <p className="absolute -top-5 left-20 text-green-700">
              মাহফিল কোন উপজেলা করতে চান?
            </p>
            <img src={inputImg} alt="" className="h-20 z-10" />
            <select
              name=""
              id=""
              onChange={upazelaSelect}
              className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
            >
              <option value="">উপজেলা নির্বাচন করুন</option>
              {filteredUpazelas.map((upazela) => (
                <option key={upazela?.id} value={upazela?.bn_name}>
                  {upazela?.bn_name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full h-full flex items-center relative">
            <p className="absolute -top-5 left-20 text-green-700">
              মাহফিল কোন ইউনিয়নে করতে চান?
            </p>
            <img src={inputImg} alt="" className="h-20 z-10" />
            <select
              name=""
              id=""
              onChange={unionSelect}
              className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
            >
              <option value="">ইউনিয়ন নির্বাচন করুন</option>
              {filteredUnions.map((union) => (
                <option key={union?.id} value={union?.bn_name}>
                  {union?.bn_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            প্রোগ্রাস্থলের বিস্তারিত ঠিকানা
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            গুগল ম্যাপ এর প্রোগ্রাস্থলের ঠিকানার লিংক (যদি পারেন)
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            যে মাঠে বা মিলনায়তনে মাহফিল করতে চান তার নাম
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            মাহফিলের প্রধান আয়োজক/সভাপতির নাম ও মোবাইল নম্বর
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            এটি এই জায়গার কততম মাহফিল?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            সর্বশেষ কবে এই জায়গায় মাহফিল হয়েছিল?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="date"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            মাহফিলের আলোচক হিসাবে আর কে কে উপস্থিত থাকবেন?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            আবু ত্বহা মুহাম্মাদ আদনান কে কোন সময় থেকে কোন সময় পর্যন্ত আলোচনা
            করতে হবে?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            কী বিষয়ে আলোচনা করার অনুরোধ করবেন?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            মাহফিলে আবু ত্বহা মুহাম্মাদ আদনানকে অর্থ কালেকশন করতে হবে কি না?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            বিগত বছরের মাহফিলে আলোচক ছিলেন কে কে?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            বিগত বছরের মাহফিলের জন্য প্রশাসনের অনুমতি নেওয়া হয়েছিল কি না?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            এই বছরের মাহফিলের জন্য প্রশাসনের লিখিত অনুমতি নিতে পারবেন কিনা?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            পর্যাপ্ত ভলান্টিয়ার থাকবে কি না ?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            মাহফিলের সাথে কোনো ধর্মীয় দলের সম্পৃক্ততা আছে কি না?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            মাহফিলটি কোন ঘোরানার মানুষদের মধ্যে হবে? ( হানাফি/ আহলে হাদিস/
            তাবলীগ/ জামায়াত/ চরমোনাই ইত্যাদি )
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            মাহফিলে কোনো রাজনৈতিক ব্যক্তি উপস্থিত থাকবেন কিনা? ( থাকলে তার নাম ও
            রাজনৈতিক পদবী )
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            আবু ত্বহা আদনান এর জন্য সম্ভাব্য পাথেয় খরচ কত?
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <div className="md:w-[600px] w-full h-20 flex items-center relative">
          <p className="absolute -top-2 left-20 text-green-700">
            বক্তার ব্যক্তিগত, অসুস্থতা, প্রশাসনিক ও অন্যান্য প্রাসঙ্গিক কারণে
            বক্তা কর্তৃক মাহফিল স্থগিত কিংবা তারিখ পরিবর্তন করার সম্পুর্ন
            এখতিয়ার থাকবে
          </p>
          <img src={inputImg} alt="" className="h-full z-10" />
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-16 pr-2 py-2 absolute z-0 left-6 rounded-full bg-white focus:outline-none border-4 border-green-800"
          />
        </div>
        <input
          type="submit"
          value="আবেদন করুন"
          className="bg-green-700 text-white px-8 py-4"
        />
      </form>
    </section>
  );
};

export default MahofilForm;
