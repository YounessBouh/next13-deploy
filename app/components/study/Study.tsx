'use client'
import { motion } from "framer-motion"
import {useTypewriter} from "react-simple-typewriter";

const Study=()=>{

    const[text1,count1]=useTypewriter({

        words:["الدراسة في بولندا تتميز بالجودة والاتقان، كما أن الشهادات التي تقدمها الجامعات البولندية تعد من أفضل الشهادات على مستوى العالم"],
              delaySpeed:2000,
              typeSpeed: 8,
         });
  
     const[text2,count2]=useTypewriter({
  
           words:["كل هذه الميزات بالإضافة إلى انخفاض تكاليف الدراسة والمعيشة تجعلها أكثر إستقطابا للطلاب من كل دول العالم"],
                 delaySpeed:2000,
                 typeSpeed: 8,
            }); 
    const[text3,count3]=useTypewriter({

           words:["الجامعات البولندية توفر الكثير من التخصصات الحديثة التي ترسم ملامح المستقبل  الجديد  إليكم أبرزها."],
                      delaySpeed:2000,
                      typeSpeed: 8,
             });
                     

    return(
        <div id="study" className="mt-10 pt-20  " >
             <motion.div   
             initial={{ x: -200, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 160 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
            }}
             >
                <p className="font-Arabic text-xl text-lime-400" dir="rtl">
                   {text1}
                </p>

                <p className="font-Arabic text-xl text-lime-400" dir="rtl">
                    {text2}
                </p>
              
                <p className="font-Arabic text-xl text-lime-400" dir="rtl">
                  {text3}
                </p>
            </motion.div>
        <section  className="max-w-[1320px] md:py-[80] py-5 pl-10 flex mx-auto md:flex-row flex-col ">
        <motion.div
           initial={{ x: -150, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{
            delay: 1,
            x: { type: "spring", stiffness: 160 },
            opacity: { duration: 0.8 },
            ease: "easeIn",
          }}
          className="basis-[30%] px-2 border-cyan-600 border-2  bg-teal-900 mr-1">
            <p className="text-center text-2xl text-pink-500 font-Arabic"> أهم التخصصات </p>
            <ul className="font-Arabic  py-4" dir="rtl">
                <li >علوم الكمبيوتر</li>
                <li>التحكم الآلي والروبوتات</li>
                <li>الالكترونيات والاتصالات</li>
                <li>الذكاء الاصطناعي</li>
                <li>الهندسة الطبية الحيوية</li>
                <li>التكنولوجيا الكيميائية</li>
                <li>الهندسة المعمارية</li>
                <li>بكالوريوس الإدارة</li>
                <li>الهندسة المدنية</li>
                <li>هندسة الطيران</li>
                <li>الهندسة الكهربائية</li>
                <li>الهندسة الميكانيكية</li>
                <li>إدارة الأعمال</li>
                <li>المالية والمحاسبة</li>
                <li>........</li>

            </ul>
         
        </motion.div>
        <motion.div
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
         delay: 0.5,
         x: { type: "spring", stiffness: 160 },
         opacity: { duration: 0.8 },
         ease: "easeIn",
       }}
        className="basis-[30%] px-2 border-cyan-600 border-2 bg-violet-900 mr-1">
            <p className="text-center text-2xl text-cyan-500 font-Arabic"> الأوراق المطلوبة للقبول في  الجامعة</p>
            <p className="font-Arabic text-center pt-4" dir="rtl"> البكالوريوس</p>
            <ul className="font-Arabic " dir="rtl">
                <li>نسخة  من شهادة الثانوية العامة مصدقة في الوزارة الخارجية أو القنصلية البولندية</li>
                <li>صورة من جواز السفر ساري المفعول</li>
                <li>  إمتحان كتابي وشفوي للغة الإنجليزية في حالة عدم وجود شهادة إتقان اللغة الإنجليزية </li>
                <li>إستمارة موقعة من طرف مدير الثانوية العامة تسمح لك بمواصلة تعليمك على مستوى أعلى</li>
            </ul>
            <hr /> 
           <p className="font-Arabic text-center" dir="rtl">الماجيستير</p>
            <ul className="font-Arabic " dir="rtl">
                <li>نسخة  من شهادة البكالوريوس العامة مصدقة في الوزارة الخارجية أو القنصلية البولندية</li>
                <li>صورة من جواز السفر ساري المفعول</li>
                <li>  إمتحان كتابي وشفوي للغة الإنجليزية في حالة عدم وجود شهادة إتقان اللغة الإنجليزية </li>
                <li>نسخة من سجل  البكالوريوس تحتوي على الدرجات، فصول المختبرات، فصول المحاضرات، فصول المشاريع ودرجاتها</li>
                <li>السيرة الذاتية</li>
            </ul> 
   
        </motion.div>
        <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
         delay: 0.5,
         x: { type: "spring", stiffness: 160 },
         opacity: { duration: 0.8 },
         ease: "easeIn",
       }}
        className="basis-[30%] px-2 border-cyan-600 border-2 bg-red-950">
            <p className="text-center text-2xl text-cyan-500 font-Arabic">أهم الجامعات البولندية  </p>
            <ul className=" py-4 font-Arabic" dir="rtl">
                <li>جامعة بوزنان للتكنولوجيا</li>
                <li>جامعة وارسو للتكنولوجيا</li>
                <li>جامعة غدانسك للتكنولوجيا</li>
                <li>جامعة فروسواف للتكنولوجيا </li>
                <li> جامعة كراكوف للتكنولوجيا</li>
                <li> أكاديمية العلوم الطبية في جامعة فروسواف</li>
                <li> أكاديمية كارول مارجنكوفسكي الطبية في بوزنان</li>
                <li>جامعة آدم ميتسكيفيتش في بوزنان</li>
                <li>كلية الطب  في مدينة  أولشتن </li>
                <li>جامعة بوزنان للاقتصاد</li>
                <li> جامعة العلوم الاجتماعية والعلوم الإنسانية </li>
                <li>معهد كوليجيوم دافينتشي</li>
            </ul>
            <hr/>
            <p className=" py-4 font-Arabic" dir="rtl">تكاليف الدراسة تتراوح بين 2500  و 3200 يورو سنويا على حسب الجامعة  </p> 
   
        </motion.div>
      </section>
    </div>
)
}

export default Study