import React from "react";
// import Dashboard from "./page";

const DashboardPage = () => {
  return (
    <section>
      <h1 class="text-lg md:text-xl font-semibold mb-6">Dashboard Overview</h1>
      <div class="space-y-8 mb-8">
        <div class="grid md:grid-cols-2 xl:grid-cols-5 gap-2">
          <div class="p-6 rounded-lg flex flex-col items-center justify-center space-y-3 text-white text-center bg-teal-600">
            <div class="[&amp;>svg]:size-8">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                ></path>
              </svg>
            </div>
            <span class="text-base">Today Orders</span>
            <span class="text-2xl font-semibold">$897.40</span>
          </div>
          <div class="p-6 rounded-lg flex flex-col items-center justify-center space-y-3 text-white text-center bg-orange-400">
            <div class="[&amp;>svg]:size-8">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                ></path>
              </svg>
            </div>
            <span class="text-base">Yesterday Orders</span>
            <span class="text-2xl font-semibold">$679.93</span>
          </div>
          <div class="p-6 rounded-lg flex flex-col items-center justify-center space-y-3 text-white text-center bg-blue-500">
            <div class="[&amp;>svg]:size-8">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                ></path>
              </svg>
            </div>
            <span class="text-base">This Month</span>
            <span class="text-2xl font-semibold">$13146.96</span>
          </div>
          <div class="p-6 rounded-lg flex flex-col items-center justify-center space-y-3 text-white text-center bg-cyan-600">
            <div class="[&amp;>svg]:size-8">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span class="text-base">Last Month</span>
            <span class="text-2xl font-semibold">$31964.92</span>
          </div>
          <div class="p-6 rounded-lg flex flex-col items-center justify-center space-y-3 text-white text-center bg-emerald-600">
            <div class="[&amp;>svg]:size-8">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span class="text-base">All-Time Sales</span>
            <span class="text-2xl font-semibold">$626513.05</span>
          </div>
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div class="rounded-lg border bg-card text-card-foreground p-4">
            <div class="flex items-center gap-3 p-0">
              <div class="size-12 rounded-full grid place-items-center [&amp;>svg]:size-5 text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col gap-y-1">
                <span class="text-sm text-muted-foreground">Total Orders</span>
                <span class="text-2xl font-semibold text-popover-foreground">
                  815
                </span>
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground p-4">
            <div class="flex items-center gap-3 p-0">
              <div class="size-12 rounded-full grid place-items-center [&amp;>svg]:size-5 text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col gap-y-1">
                <span class="text-sm text-muted-foreground">
                  Orders Pending
                </span>
                <span class="text-2xl font-semibold text-popover-foreground">
                  263
                </span>
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground p-4">
            <div class="flex items-center gap-3 p-0">
              <div class="size-12 rounded-full grid place-items-center [&amp;>svg]:size-5 text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-y-1">
                <span class="text-sm text-muted-foreground">
                  Orders Processing
                </span>
                <span class="text-2xl font-semibold text-popover-foreground">
                  97
                </span>
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground p-4">
            <div class="flex items-center gap-3 p-0">
              <div class="size-12 rounded-full grid place-items-center [&amp;>svg]:size-5 text-emerald-600 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-500">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col gap-y-1">
                <span class="text-sm text-muted-foreground">
                  Orders Delivered
                </span>
                <span class="text-2xl font-semibold text-popover-foreground">
                  418
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border bg-card text-card-foreground p-4">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Weekly Sales
            </h3>
            <div class="pb-2">
              <div dir="ltr" data-orientation="horizontal">
                <div className="flex items-center justify-start border-b border-b-muted text-muted-foreground mb-6">
                  <button className="inline-flex items-center justify-center whitespace-nowrap border-b-2 border-b-transparent rounded-t-md px-3 py-1.5 -mb-[1px] text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-current data-[state=active]:text-primary">
                    Sales
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap border-b-2 border-b-transparent rounded-t-md px-3 py-1.5 -mb-[1px] text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-current data-[state=active]:text-orange-500">
                    Orders
                  </button>
                </div>
                <div
                  data-state="active"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r6:-trigger-sales"
                  id="radix-:r6:-content-sales"
                  tabindex="0"
                  class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative h-60"
                >
                  <canvas role="img" height="300" width="532"></canvas>
                </div>
                <div class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative h-60"></div>
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground p-4">
            <h3 class="text-lg md:text-xl font-semibold mb-4">
              Best Selling Products
            </h3>
            <div class="pb-2">
              <div class="relative h-[18.625rem]">
                <canvas role="img" height="372" width="532"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
