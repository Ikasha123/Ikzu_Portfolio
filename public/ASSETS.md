# Portfolio assets

Place your local files in this folder or its subfolders:

- `ikasha-cv.pdf` for the Download CV buttons
- `profile.jpg` for your profile photo
- `projects/project-name.jpg` for project images
- `videos/project-demo.mp4` for project videos

To use a project image or video, edit that project in `components/portfolio/PortfolioPage.tsx`:

```tsx
image: "/projects/project-name.jpg",
video: "/videos/project-demo.mp4",
```

The profile image currently uses `profile-placeholder.svg`. Replace that file with your photo, or change the `src` value in `PortfolioPage.tsx` to `/profile.jpg`.

Supported browser-friendly formats include JPG, PNG, WebP, SVG, and MP4. Keep large videos compressed for faster loading.
