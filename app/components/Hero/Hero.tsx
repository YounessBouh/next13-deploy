'use client'

import { motion } from "framer-motion"
import {useTypewriter,Cursor} from "react-simple-typewriter";




const Hero=()=>{
   const[text1,count1]=useTypewriter({

      words:["مرحبا بكم، سعداء بوجودكم معنا",
           " جميعا من أجل مستقبل أفضل"],
            loop:true,
            delaySpeed:1000,
       });

   const[text2,count2]=useTypewriter({

         words:["نوفر لكم  مجموعة من الخدمات المتنوعة للطلاب الراغبين بالدراسة في بولندا  :"],
              
               delaySpeed:1000,
          });  
    
   
    const txt1="التسجيل في الجامعة"
    const txt2="إيجاد السكن"
    const txt3="المساعدة في التقديم على الإقامة"
    const txt4="إنشاء شركة"
    const txt5="دروس في البرمجة"
    const text3="طلب العلم شاق ولكن له لذة ومتعة والعلم لا ينال إلا على جسر من التعب والمشقة ومن لم يتحمل ذل العلم ساعة يتجرع كأس الجهل أبدا."       

 
 
    return (
      <section id="home" className="max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col pt-28 ">
        <div className="basis-[45%] pb-5">
         <motion.img
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 0.2,
            }}
            className="w-auto h-auto object-contain border-cyan-900 border-4"
            src="/oldMen.jpg"
            alt="primeBannerImg"
          />
        </div>
        <div className="basis-[55%] px-5">
        
           <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 160 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
            }}
            className="text-4xl text-pink-500 font-Arabic pb-2 " dir="rtl">{text1}</motion.h1>
           <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
             delay: 0.2,
             x: { type: "spring", stiffness: 160 },
             opacity: { duration: 0.2 },
             ease: "easeIn",
           }}
             className="text-3xl text-cyan-500 font-Arabic" dir="rtl">{text2}</motion.h1>

           <motion.ul
           initial={{ y: 150, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 160 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
          }}
            className="text-xl text-white font-Arabic" dir="rtl"
            >
            <li>{txt1}</li>
            <li>{txt2}</li>
            <li>{txt3}</li>
            <li>{txt4}</li>
            <li>{txt5}</li>
            </motion.ul>  
          
            <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
             delay: 0.2,
             x: { type: "spring", stiffness: 160 },
             opacity: { duration: 0.2 },
             ease: "easeIn",
           }}
             className="text-xl text-yellow-500 font-Arabic pt-2" dir="rtl">{text3}</motion.h1>

        </div>
    </section>
    )
}
export default Hero