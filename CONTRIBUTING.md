Contributing to CineScope 🎬

Thank you for considering contributing to CineScope!

📋 How to Contribute
1. Fork & Clone
git clone https://github.com/<your-username>/CineScope.git
cd CineScope

2. Create a New Branch
git checkout -b feature/your-feature-name

3. Make Your Changes

Add or edit code inside app/, components/, or services/.

Ensure TypeScript types remain correct.

Run and test on Expo (npx expo start).

4. Commit & Push
git add .
git commit -m "feat: add search history tracking"
git push origin feature/your-feature-name

5. Open a Pull Request (PR)

Go to the original CineScope repo.

Click New Pull Request.

Explain clearly what you’ve changed and why.

🛠 Code Guidelines

Language: React Native + TypeScript.

State management: Keep components functional and stateless where possible.

Backend: We use Supabase (Postgres + Auth + Storage).

Styling: We use nativewind (Tailwind for React Native).

Routing: Powered by expo-router.

Commits: Follow Conventional Commits
 (feat:, fix:, docs:, refactor:, etc.).

🧪 Testing

Before pushing, make sure:

App builds with npx expo start.

Trending movies display correctly from Supabase.

No duplicate keys in FlatLists.

📄 License

This project is licensed under the MIT License.
We chose MIT because it is:

Permissive → allows anyone to use, modify, and distribute the project.

Simple → clear and easy to understand.

Open → encourages adoption and contributions without restrictions.
