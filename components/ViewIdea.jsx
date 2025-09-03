import { useParams } from "react-router-dom"
import { supabase } from "../utils/supabase"
import { useEffect, useState } from "react"
import { BiLike, BiSolidLike } from "react-icons/bi"
import { FaRegStar } from "react-icons/fa"

const ViewIdea = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  const calcRating = async (idea) => {
    const { data: all } = await supabase.from("kid_ideas").select("likes,views")
    let likes = all.reduce((a, b) => a + b.likes, 0)
    let views = all.reduce((a, b) => a + b.views, 0)
    if (!views) return
    let ideaScore = idea.likes / idea.views 
    let avgScore = likes / views
    let rating
    if (ideaScore > avgScore) {
      if(idea.views>=20) {
        rating = 5
      }
      else if(idea.views>=10) {
        rating = 4
      }
      else{
        rating = 3.5
      }
    } else {
      rating = (ideaScore/avgScore*5).toFixed(1)
    }
    const { data: updated } = await supabase
      .from("kid_ideas")
      .update({ rating })
      .eq("id", id)
      .select()
      .single()
    if (updated) setData(updated)
  }

  const updateLikes = async () => {
    let newLikes = liked ? data.likes - 1 : data.likes + 1
    const { data: updated } = await supabase
      .from("kid_ideas")
      .update({ likes: newLikes })
      .eq("id", id)
      .select()
      .single()
    if (updated) {
      setData(updated)
      setLiked(!liked)
      calcRating(updated)
    }
  }

  useEffect(() => {
    const load = async () => {
      const { data: row } = await supabase
        .from("kid_ideas")
        .select("*")
        .eq("id", id)
        .single()
      if (!row) return setLoading(false)
      const { data: updated } = await supabase
        .from("kid_ideas")
        .update({ views: row.views + 1 })
        .eq("id", id)
        .select()
        .single()
      let final = updated || row
      setData(final)
      calcRating(final)
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!data) {
    return <div className="text-center text-gray-600 py-20">Idea not found.</div>
  }

  return (
    <section className="py-16 px-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-8">
        <div className="flex justify-center mb-6">
          <img
            src={data.startup_logo}
            alt={data.startup_idea}
            className="w-24 h-24 rounded-full border-2 border-gray-200 object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{data.startup_idea}</h1>
        <p className="text-gray-600 text-center mb-8">{data.startup_desc}</p>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Problem Statement</h2>
            <p className="text-gray-600">{data.problem_statement}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Solution</h2>
            <p className="text-gray-600">{data.solution}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <h1 className="cursor-pointer flex items-center text-xl mt-10" onClick={updateLikes}>
            {!liked ? <BiLike className="mr-1" /> : <BiSolidLike className="mr-1" />} {data.likes}
          </h1>
          <h1 className="flex items-center text-xl mt-10">•</h1>
          <h1 className="flex items-center text-xl mt-10">
            <FaRegStar className="mr-1 text-yellow-600" />
            {data.rating}/5
          </h1>
          <h1 className="flex items-center text-xl mt-10">•</h1>
          <h1 className="flex items-center text-xl mt-10">{data.views} Views</h1>
        </div>
      </div>
    </section>
  )
}

export default ViewIdea
