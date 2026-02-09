import { useState, useEffect } from "react";
import { fetchGithubUser, GithubUser } from "@/services/github.service";
import { useQuery } from "@tanstack/react-query";

export const useGithubUser = (username: string) => {
  return useQuery({
    queryKey: ["githubUser", username],
    queryFn: () => fetchGithubUser(username),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
