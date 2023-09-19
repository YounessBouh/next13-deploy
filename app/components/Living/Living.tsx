

const LivingTwo=()=>{
  const x="يعد السكن في بولندا منخفض التكلفة مقارنة بالدول الأوربية الأخرى، حيث تبلغ تكلفة السكن الجامعي بين 150 و 200 يورو شهريا، في الأونة الأخيرة أصبح الكثير من الطلاب يميلون للجامعات الغير الحكومية لأنها أكثر مرونة في تنظيم برامجها الدراسية وبذالك يصبح الطالب قادرأن يوفق بين الدراسة والعمل لبضع ساعات يوميا،لكن ليس أغلب الجامعات الغير الحكومية لا تتوفر على السكن الجامعي  مما يجعل الطالب  يستأجر غرفة أو شقة خارج السكن الجامعي."     
  const y="السكن الجامعي"
  return (
      <div id="living" className="flex flex-wrap">
  <div className="w-full sm:w-8/12 mb-10">
    <div className="container mx-auto h-full sm:p-10">
     
      <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
        <div className="w-full">
          <h1 className="text-4xl lg:text-6xl font-bold font-Arabic" dir="rtl">{y} </h1>
          <div className="w-20 h-2 bg-green-700 my-4"></div>
          <p className="text-xl mb-10 font-Arabic" dir="rtl">{x}</p>
        </div>
      </header>
    </div>
  </div>
  <img src="/room.jpg" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
</div>
  )
}

export default LivingTwo