import { SwiperComponent } from './Swiper';

export const History = () => {
  return (
    <section
      id="history"
      className="w-full h-dvh bg-[url(src/assets/history.png)] bg-top bg-cover relative">
      <div className="w-11/12 lg:w-7/12 mx-auto pt-32">
        <h3 className="font-bold uppercase relative">
          <span className="text-9xl text-slate-600">01.</span>
          <span className="text-5xl absolute bottom-10 left-[9.5rem] text-slate-800">
            History
          </span>
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          asperiores nihil magnam libero commodi veniam recusandae assumenda ad
          accusantium inventore distinctio corrupti, impedit earum perspiciatis
          molestiae vel doloribus obcaecati sapiente. Quo sequi harum ab. Fuga
          cupiditate quos quasi cumque blanditiis commodi, optio perferendis!
          Voluptates, mollitia provident vel voluptatem quia aliquam voluptate
          eaque! Quidem illo, praesentium, molestias nesciunt laboriosam saepe
          ipsum aspernatur neque nostrum possimus eos.
        </p>
      </div>
      <div className="w-full absolute bottom-0 bg-slate-700 py-10">
        <SwiperComponent />
      </div>
    </section>
  );
};
