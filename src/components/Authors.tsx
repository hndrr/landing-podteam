const Authors: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold tracking-tight text-center">
          POD Team Members
        </h2>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden  sm:rounded-xl">
            <a
              href="https://kboyflutteruniv.com/"
              className="w-16 h-16 overflow-hidden bg-gray-200 rounded-full"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1303007901649256448/FzV_BaS5_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </a>
            <h4 className="text-xl font-medium text-gray-700">Flutter大学</h4>
            <p className="text-base text-center text-gray-500">
              Each of our plan will provide you and your team with
              certifications.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl">
            <div className="w-16 h-16 overflow-hidden bg-gray-200 rounded-full">
              <img
                src="https://pbs.twimg.com/profile_images/1306340269034336262/Gua2ip5u_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-xl font-medium text-gray-700">Rにしおか</h4>
            <p className="text-base text-center text-gray-500">
              Send out notifications to all your customers to keep them engaged.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl">
            <a
              className="w-16 h-16  overflow-hidden bg-gray-200 rounded-full"
              href="https://twitter.com/forelgoog"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1231486072309207040/HxEzaw0e_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </a>
            <h4 className="text-xl font-medium text-gray-700">ポテセン</h4>
            <p className="text-base text-center text-gray-500">
              High-quality bundles of awesome tools to help you out.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl">
            <a
              href="https://twitter.com/tokkuu"
              className="w-16 h-16 overflow-hidden bg-gray-200 rounded-full"
            >
              <img
                src="https://avatars.githubusercontent.com/u/69064290?v=4"
                className="object-cover w-full h-full"
              />
            </a>
            <h4 className="text-xl font-medium text-gray-700">tokku5552</h4>
            <p className="text-base text-center text-gray-500">
              Developer tools to help grow your application and keep it
              up-to-date.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl">
            <div className="w-16 h-16 overflow-hidden bg-gray-200 rounded-full">
              <img
                src="https://pbs.twimg.com/profile_images/1369254753562103815/77AB6E8W_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-xl font-medium text-gray-700">コップ時計</h4>
            <p className="text-base text-center text-gray-500">
              The right kind of building blocks to take your company to the next
              level.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 sm:rounded-xl">
            <div className="w-16 h-16 overflow-hidden bg-gray-200 rounded-full">
              <img
                src="https://pbs.twimg.com/profile_images/1356931586919256064/faJCeS52_400x400.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-xl font-medium text-gray-700">hndr</h4>
            <p className="text-base text-center text-gray-500">
              Coupons system to provide special offers and discounts for your
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
