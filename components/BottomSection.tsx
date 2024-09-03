import React from 'react';
import { Apple, PlayCircle, Star } from 'lucide-react';

const DownloadAppComponent = () => {
  return (
    <div className="bg-[#F5F5F8] rounded-xl p-3 w-[330px] border-1 my-12 ">
      <div className="flex items-end gap-2.5 mb-2">
        <span className="text-[#191C1F] text-sm leading-5 font-medium">DOWNLOAD APP</span>
        <span className="text-[13px] font-[300] leading-5 text-[#33A34D]">1 Crore+ Downloads.</span>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2">
          <img src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/apple_round_logo.png" className='w-8 h-8' alt="" />
          <div className='flex items-center justify-center gap-1'>
            <div className="font-[300] text-[13px] leading-5">4.7</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-200'}`}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/playstore_round_logo.png" className='h-8 w-8' alt="" />
          <div className='flex items-center justify-center gap-1'>
            <div className="font-[300] text-[13px] leading-5">4.6</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-yellow-200'}`}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppComponent;