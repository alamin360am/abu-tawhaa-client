import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../../components/Heading';
import Quote from '../../components/Quote';

const MahofilForm = () => {
    return (
        <section className='p-8 bg-green-50'>
            <Helmet><title>Application Form</title></Helmet>
            <Heading heading={"প্রোগ্রামের জন্য আবেদন করুন"}></Heading>
            <Quote quote={"যে ব্যক্তি মানুষকে আল্লাহর পথে দাওয়াত দেয়, সৎকর্ম করে আর বলে, ‘আমি তো মুসলমানদের একজন’, তার চেয়ে উত্তম আর কে হতে পারে? (সূরা হা-মিম-সাজদা: ৩৩)"}></Quote>
            <p className='text-red-500 mb-4'>ফর্মের নিচে আমাদের নীতিমালা ও শর্তাবলী দেওয়া আছে। আবেদনের পূর্বে নীতিমালা ও শর্তাবলী পড়ে নিবেন ইনশাআল্লাহ।</p>

        </section>
    );
};

export default MahofilForm;