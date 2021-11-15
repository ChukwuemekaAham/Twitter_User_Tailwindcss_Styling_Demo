import React, {useState} from 'react';
// import $ from 'jquery';
import Loginmodal from './loginModal';


const Rightnav = () => {

	let btn = document.getElementById('#popbtn');

	const [init, showInit] = useState(btn)

	const Showpopup = () => {
		showInit(init);
	}

  return (
	<div>
    <div class="px-4 hidden lg:block" style={{maxWidth: 350}}>
		<input class="w-full my-2 rounded-full bg-gray-200 text-sm px-4 py-1 outline-none border focus:border-blue-500 focus:bg-white" placeholder="Search Twitter" />
		<div class="mt-2 rounded-lg border p-3">
			<div class="text-lg font-extrabold text-gray-900">New to Twitter?</div>
			<div class="text-xs text-gray-600">Sign up now to get your own personalized timeline!</div>
			
			<Loginmodal />
			
		</div>
		<div class="mt-2 rounded-lg bg-gray-100">
			<div class="text-lg font-extrabold text-gray-900 p-3">You might like</div>
			<div class="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
				<div class="flex items-center">
					<img class="rounded-full h-10 w-10" src="/img/tw.png" />
					<div class="ml-2 flex flex-col">
						<div class="leading-snug text-sm text-gray-900 font-bold">Tailwind CSS</div>
						<div class="leading-snug text-xs text-gray-600">@tailwindcss</div>
					</div>
				</div>
				<button class="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">Follow</button>
			</div>
			<div class="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
				<div class="flex items-center">
					<img class="rounded-full h-10 w-10" src="/img/ss.jpg" />
					<div class="ml-2 flex flex-col">
						<div class="leading-snug text-sm text-gray-900 font-bold">Steve Schoger</div>
						<div class="leading-snug text-xs text-gray-600">@steveschoger</div>
					</div>
				</div>
				<button class="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">Follow</button>
			</div>
			<div class="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
				<div class="flex items-center">
					<img class="rounded-full h-10 w-10" src="/img/to.jpg" />
					<div class="ml-2 flex flex-col">
						<div class="leading-snug text-sm text-gray-900 font-bold">Taylor Otwell</div>
						<div class="leading-snug text-xs text-gray-600">@taylorotwell</div>
					</div>
				</div>
				<button class="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100">Follow</button>
			</div>
			<div class="p-3 flex items-center justify-between border-t cursor-pointer">
				<div class="text-blue-500 text-sm">Show more</div>
			</div>
		</div>
	</div>
	
	</div>
  );
}

export default Rightnav;
