import { useEffect, useState } from "react";
import { useCounterStore } from "../stores/useCounterStore";
import instance from "../lib/axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

export function Example() {
  const { count, increment, decrement, reset } = useCounterStore();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await instance.get<Post[]>("/posts");
        setPosts(response.data);
      } catch (err) {
        setError("게시물을 불러오는데 실패했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">예시 페이지</h1>

      {/* Zustand 예시 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Zustand 카운터</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            감소
          </button>
          <span className="text-xl">{count}</span>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            증가
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            리셋
          </button>
        </div>
      </div>

      {/* Axios 예시 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Axios 게시물 목록</h2>
        {loading ? (
          <p>로딩 중...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.id} className="p-2 border rounded">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
