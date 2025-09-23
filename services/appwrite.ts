import { supabase } from "@/lib/supabase";

export interface TrendingMovie {
  movie_id: number;
  title: string;
  poster_url: string;
  count: number;
}

export const updateSearchCount = async (query: string, movie: Movie) => {
  try {
    const { data, error } = await supabase
      .from("metrics")
      .select("*")
      .eq("searchTerm", query)
      .limit(1);

    if (error) {
      console.error("Supabase select error:", error);
      return;
    }

    if (data && data.length > 0) {
      const existing = data[0];
      await supabase
        .from("metrics")
        .update({ count: existing.count + 1 })
        .eq("id", existing.id);
    } else {
      await supabase.from("metrics").insert([
        {
          searchTerm: query,
          movie_id: movie.id,
          title: movie.title,
          count: 1,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        },
      ]);
    }
  } catch (err) {
    console.error("Error updating search count:", err);
  }
};

export const getTrendingMovies = async (): Promise<TrendingMovie[]> => {
  try {
    const { data, error } = await supabase
      .from("metrics")
      .select("movie_id, title, poster_url, count")
      .order("count", { ascending: false })
      .limit(5);

    if (error) {
      console.error("Trending fetch error:", error);
      return [];
    }

    return data as TrendingMovie[];
  } catch (err) {
    console.error("Error fetching trending movies:", err);
    return [];
  }
};
