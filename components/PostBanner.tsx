import React from 'react'
import Image from 'next/image'
import urlFor from '../lib/urlFor'
import {ArrowUpRightIcon} from '@heroicons/react/24/solid'
import ClientSideRoute from './ClientSideRoute'

type Props = {
  data: Post
}

function PostBanner({data: post}: Props) {
  return (
    <ClientSideRoute key={post._id} route={`/posts/${post.slug.current}`}>
      <div className="flex flex-col group cursor-pointer">
        <div className="relative w-full h-40 lg:h-80 drop-shadow-xl group-hover:scale-105
            transition-transform duration-200 ease-out">
          <Image
            className="object-cover object-center"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
          <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded
              drop-shadow-lg text-white p-2 lg:p-5 flex justify-between">
            <div>
              <p className="font-bold">{post.title}</p>
              <p>{
                new Date(post._createdAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-1 md:gap-x-2 items-center justify-center">
              {post.categories?.map(category => (
                <div className="bg-brand text-center text-black px-1 py-0.5 lg:px-3 lg:py-1
                 rounded-full text-xs lg:text-sm font-semibold">
                  <p>{category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="line-clamp-2 text-gray-500">{post.description}</p>
        </div>

        <p className="mt-5 font-bold flex items-center group-hover:underline">
          Read Post
          <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
        </p>
      </div>
    </ClientSideRoute>
  )
}

export default PostBanner