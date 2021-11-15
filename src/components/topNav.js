import React from 'react';


const Topnav = () => {
  return (
   <div>
        <div class="py-1 flex border-b w-full sticky top-0 bg-white">
			<div class="mx-4 my-1 rounded-full hover:bg-gray-200 cursor-pointer p-2 text-blue-400">
				<svg viewBox="0 0 24 24" class="h-6 w-6 fill-current cursor-pointer"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
			</div>	
			<div class="ml-1">
				<div class="text-xl font-extrabold">Adam Wathan</div>
				<div class="text-sm text-gray-600 leading-none">29.9K Tweets</div>
			</div>
		</div>
		<div>
			<img src="/img/header.jpeg" />
		</div>
		<div class="px-3">
			<div class="flex items-center justify-between">
				<img class="-mt-8 w-24 h-24 rounded-full border-2 border-white" src="/img/profile.jpg" />
				<button class="h-10 px-4 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">Follow</button>
			</div>
			<div class="">
				<div class="text-xl font-extrabold">Adam Wathan</div>
				<div class="text-sm text-gray-600 leading-none">@adamwathan</div>
				<div class="mt-2 text-sm">Creator of <span class="text-blue-400">@tailwindcss</span>. Host of <span class="text-blue-400">@fullstackradio</span>. Listener of Slayer. Austin 3:16.</div>
				<div class="flex flex-wrap mt-2 text-gray-600 text-sm">
					<div class="flex flex-no-wrap items-center">
						<svg viewBox="0 0 20 20" fill="none" class="stroke-current stroke-1 flex flex-no-wrap w-4 h-4"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
						<div class="ml-1">Cambridge, Ontario, Canada</div>
					</div>
					<div class="mx-2 flex items-center">
						<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
						<a href='http://adamwathan.me' class="ml-1 text-blue-400">adamwathan.me</a>
					</div>
					<div class="flex items-center">
						<svg viewBox="0 0 20 20" fill="none" class="stroke-current w-4 h-4"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
						<div class="ml-1">Joined July 2012</div>
					</div>
				</div>
				<div class="mt-2 flex">
					<div class="text-sm font-bold text-gray-900">643 <span class="font-normal text-gray-600">Following</span></div>
					<div class="ml-4 text-sm font-bold text-gray-900">67.5K <span class="font-normal text-gray-600">Followers</span></div>
				</div>
			</div>
		</div>
		<div class="mt-4 flex w-full justify-around font-bold text-md text-gray-600 border-b border-gray-200 cursor-pointer">
			<div class="text-blue-500 border-b-2 border-blue-400 py-3 flex flex-grow justify-center hover:bg-blue-100 hover:text-blue-500">Tweets</div>
			<div class="py-3 flex flex-grow justify-center hover:bg-blue-100 hover:text-blue-500">Tweets & Replies</div>
			<div class="py-3 flex flex-grow justify-center hover:bg-blue-100 hover:text-blue-500">Media</div>
			<div class="py-3 flex flex-grow justify-center hover:bg-blue-100 hover:text-blue-500">Links</div>
		</div>
   </div>
  );
}

export default Topnav;
