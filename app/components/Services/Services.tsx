const Testtwo=()=>{
  const x="الخدمات التي نقدمها لزبائننا"

  const txt1="التسجيل في الجامعة"
  const text1=" نقوم بمساعدة الطلاب في جميع الإجراءات الخاصة بالتسجيل في الجامعة"
  const txt2="السكن"
  const text2="نقوم بمساعدة الطلاب في إيجاد السكن سواء في السكن الجامعي أو خارجه"
  const txt3="الإقامة"
  const text3=" نقدم كل الدعم للطلاب في ملىء الإستمارات وترجمة الأوراق للتقديم على الإقامة"
  const txt4="إنشاء شركة"
  const text4="مساعدة الراغبين في الدخول في مجال المقاولات في إنشاء شركة "
  const txt5="دروس في البرمجة"
  const text5="نقوم بإعطاء دروس في مجال البرمجة الذي أصبح أكثر طلبا في سوق العمل"
  const txt6=" إنشاء مواقع إلكترونية"
  const text6="إن كنت تبحت عن إنشاء صفحة إلكترونية أكثر حرفية فأنت في المكان الصحيح."

  return(
      <section id="services" className="mt-20">
          <p className="text-4xl text-pink-500 font-Arabic text-center" dir="rtl">{x}</p>
      <div className="-mx-4 flex  flex-wrap  p-8 ">

  <div className="w-full  px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-9 bg-cyan-600 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
          <div >
              <h3 className="mb-4 text-xl text-center font-Arabic text-yellow-400 sm:text-2xl lg:text-xl xl:text-2xl" dir="rtl">{txt1}
              </h3>
              <p className=" text-2xl font-Arabic " dir="rtl">{text1}</p>
          </div>
      </div>
  </div>



  <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-9 bg-cyan-600 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
          <div>
              <h3 className="mb-4 text-xl text-center font-Arabic text-yellow-400  sm:text-2xl lg:text-xl xl:text-2xl" dir="rtl">{txt2}
              </h3>
              <p className=" text-2xl font-Arabic" dir="rtl">{text2}</p>
          </div>
      </div>
  </div>



  <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-9 bg-cyan-600 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
         
          <div>
              <h3 className="mb-4 text-xl text-center font-Arabic font-bold text-yellow-400  sm:text-2xl lg:text-xl xl:text-2xl" dir="rtl">{txt3}
              </h3>
              <p className="text-2xl font-Arabic" dir="rtl">{text3}</p>
          </div>
      </div>
  </div>


  
  <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-9 bg-cyan-600 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
          <div>
              <h3 className="mb-4 text-xl text-center font-Arabic text-yellow-400  sm:text-2xl lg:text-xl xl:text-2xl" dir="rtl">{txt4}</h3>
              <p className="text-2xl font-Arabic" dir="rtl">{text4}</p>
          </div>
      </div>
  </div>


  <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-9 bg-cyan-600 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
          <div>
              <h3 className="mb-4 text-xl text-center font-Arabic font-bold text-yellow-400  sm:text-2xl lg:text-xl xl:text-2xl" dir="rtl">{txt5}
                  </h3>
              <p className="text-2xl font-Arabic" dir="rtl">{text5}</p>
          </div>
      </div>
  </div>


  <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-9 bg-cyan-600 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
          <div>
              <h3 className="mb-4 text-xl text-center font-Arabic text-yellow-400  sm:text-2xl lg:text-xl xl:text-2xl" dir="rtl">{txt6}
              </h3>
              <p className="text-2xl font-Arabic" dir="rtl">{text6}</p>
          </div>
      </div>
  </div>
</div>
</section>
  )
}

export default Testtwo