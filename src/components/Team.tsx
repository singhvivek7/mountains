import { useState } from 'react';

export const Team = () => {
  const [selected, setSelected] = useState(1);
  return (
    <section
      id="team"
      className={`w-full h-dvh bg-top bg-cover ${
        selected === 1
          ? 'bg-[url(src/assets/team.png)]'
          : 'bg-[url(src/assets/team2.png)]'
      }`}>
      <div className="w-11/12 lg:w-7/12 mx-auto pt-10 md:pt-32 flex justify-start items-center flex-col md:flex-row gap-16">
        <h3 className="font-bold uppercase relative w-[300px]">
          <span className="text-9xl text-slate-600">02.</span>
          <span className="text-5xl absolute bottom-10 left-[10rem] text-slate-800">
            Climb
          </span>
        </h3>
        <p className="w-full md:w-[calc(100%-300px)]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          asperiores nihil magnam libero commodi veniam recusandae assumenda ad
          accusantium inventore distinctio corrupti, impedit earum perspiciatis
          molestiae vel doloribus obcaecati sapiente.
        </p>
      </div>
      <div className="h-12 w-full bg-slate-900 mt-10">
        <div className="w-11/12 lg:w-7/12 h-full mx-auto flex justify-start items-center gap-5">
          <div
            onClick={() => setSelected(1)}
            className={`h-full px-5 text-xl uppercase font-semibold flex justify-center items-center cursor-pointer ${
              selected === 1 ? 'text-slate-900 bg-white/75' : 'text-white'
            }`}>
            <span className="border-b border-b-slate-900">Mountain 1</span>
          </div>
          <div
            onClick={() => setSelected(2)}
            className={`h-full px-5 text-xl uppercase font-semibold flex justify-center items-center cursor-pointer ${
              selected === 2 ? 'text-slate-900 bg-white/75' : 'text-white'
            }`}>
            <span className="border-b border-b-slate-900">Mountain 2</span>
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-7/12 mx-auto mt-20 md:mt-36">
        <div className="w-fit bg-white/80 p-10 rounded-sm">
          <h4 className="uppercase text-3xl font-bold text-slate-700 mb-5">
            Schedule
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <span>25 Nov 2016</span>
            <span>Vestibulum viverra</span>
            <span>24 Nov 2016</span>
            <span>Vestibulum viverra</span>
            <span>20 Nov 2016</span>
            <span>Vestibulum viverra</span>
            <span>18 Nov 2016</span>
            <span>Vestibulum viverra</span>
          </div>
        </div>
      </div>
    </section>
  );
};
